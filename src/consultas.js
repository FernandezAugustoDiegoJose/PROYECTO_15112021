/*
En el trabajo le han pedido a un empleado hacer una lista con todos los coches que tengan 300CV
o más y que su consumo mínimo sea menor de 10L. Entre otras limitaciones le han pedido que los coches 
sean Gasolina y Diesel con cambio manual y que sean Coupés. 
*/
db.coches.find({$and:[
    {CV:{$gte:300}}, 
    {"consumo.min":{$lt:10}},
    {cambioManual:{$exists:true}},
    {tipoCombustible:{$in:["Gasolina","Diesel"]}},
    {tipo:{$eq: "Coupé"}}
]}).pretty()

/*
Un compañero de clase necesita buscar entre una serie de coches, uno que se adapte a su rutina de 
trabajo y estudio, por lo tanto no tiene necesidad de un coche extremadamente potente, a él con que
el bloque del motor no supere los 2 litros, no tenga inyección directa y tenga una cilindrada entre 
1500 y 2000 cm3 esta conforme, lo único que le pasa es que no le gusta la marca Audi ni Cupra.
*/
db.coches.find({$or:[
        {"motor.bloque.capacidad":{$lte:2}},
        {"motor.inyección":{$ne:"directa"}}
],
   marca:{$nin:["Audi", "Cupra"]},
   "motor.cilindrada":{$not:{$gt:2000, $lt:1500}}

}).pretty()

/*
Este fin de semana un amigo quiere renovar su coche porque el suyo tiene 20 años, lo tiene que llevar
al desguace y necesita uno para llegar a su trabajo que se encuentra a mucha distancia de su vivienda
,para esto precisa un coche que no supere los 140 CV, que tenga un consumo  máximo  de  al rededor de 
8 litros siendo Diesel, que sea comodo y espacioso como los Sedane teniendo un presupuesto máximo de 25000€
*/
//Al utilizar el nor, ponemos lo contrario para que nos salgan los datos que queremos
db.coches.find({$nor:[
    {CV:{$gte:140}},
    {"consumo.max":{$gt:8}}
],
    tipoCombustible:{$all:["Diesel"]},
    tipo:"Sedane",
    precioBasico:{$lte:25000}
}
).pretty()

/*
En una empresa se quiere hacer una lista de coches para un sector de personas a las que les
guste la eficiencia del motor, que solo tengan como tipo de combustible Gasolina y Diesel, con un grosor 
de los frenos de tipo carbocerámicos menor a 320 milimetros sin importar las puertas que tenga
el coche
*/
db.coches.find({
    tipoCombustible:{$size:2},
    frenos:{$all:[{"$elemMatch":{tipo:"carbocerámicos",grosor:{$lt:320}}}]},
    puertas:{$type:1}
}
).pretty()
    
/*
En un grupo de amigos adictos a la velocidad les gustaría saber que coches serían los mejores
para sentir pura adrenalina a la hora de conducir y como es sabido en el mundo del motor los
mejores motores son los que tienen como tipo de combustible la gasolina, con mas de 400 CV y a ellos
les gustaría que fuesen nuevo, como los que se han fabricado a partir de 2018.
*/
db.coches.find({
    $nor:[{$jsonSchema:{required:["freno"], properties:{tipo:{bsonType:"string"},grodor:{bsonType:"double"}}}}],
    tipoCombustible:["Gasolina"],
    fechaFabricación:{$gte:new Date("2018-01-01")},
    CV:{$gt:400}
}).prettyy()

/*
La familia Fernández quiere comprar un coche familiar que se amolde a su situación economica,
se quieren gastar al rededor de 15000€, que  sea Diesel, ya que consumen poco y con un
maletero de más de 500 litros de capacidad
*/
db.coches.find({
    precioBasico:{$lte:15000},
    tipoCombustible:["Diesel"],
    capacidadMaletero:{$gt:500},
    tipoCombustible:{$not:{$regex: /^P./m},}
}).pretty()

/*
Quiero mirar una lista de coches para comprarme uno pero esta lista esta algo incompleta, por lo
tanto me gustaría que se añadiese un dato más sobre la tracción de los coches
*/
db.coches.aggregate([{
    $addFields:{tracción:["trasera", "delantera"]},
}]).pretty()

/*
Queremos seleccionar los datos de la lista donde los CV sean mayores que 95 y menores que 150
o cuando la cilindrada sea menor o igual a 3000 cm3 y luego lo enviamos a un grupo para contar
los datos
*/
db.coches.aggregate([
    {$match:
        {$or:
            [
                {CV:{ $gt:95, $lt:150}},
                {"motor.cilindrada":{$lte:3000}}
            ]
        }
    },
    { $group: { _id: null, count: { $sum: 1 } } },
]).pretty()

/*
Para un trabajo de clase quiero extraer de una base de datos los mejores coches de la lista que estan 
por encima de 50000€ y ponerlos con un contador
*/
db.coches.aggregate([
    {$match:{precioBasico:{$gt:50000}}},
    {$count:"Número de coches por un valor superior a 50000€"}
]).pretty()

