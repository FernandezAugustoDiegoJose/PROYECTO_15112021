//Cuando el valor cambioManual sea false el coche es automático, si es true es manual y automático
//El bloque del motor se mide en litros
//La capacidad de maletero se mide en litros
//El peso de los coches se mide en kilogramos
//En las velocidades de los coches se cuenta también la marcha atras
//La cilindrada se mide en centimetros cúbicos
//El grosor de los frenos se mide en milimetros
db.coches.deleteMany({})
db.coches.insertMany([
    {"_id": 1,
        marca: "Audi", 
        modelo: "A1", 
        CV:[95, 150], 
        peso: 1165,
        puertas:[3,5],
        capacidadMaletero: 335, 
        consumo:{min:3.3, max:6.5},
        cambioManual:true, 
        precioBasico:21840, 
        tipoCombustible: ["Gasolina", "Diesel"], 
        fechaFabricación:new Date("2018-11-01"), 
        motor:{bloque:{capacidad:1, cilindros:3}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[1400 , 2000], velocidades:6, motorenV:false}, 
        tipo:"Sportback",
        frenos:[{tipo:"pinzas fijas",grosor:245},{tipo:"carbocerámicos", grosor:300}]
},
    {"_id": 2,marca: "Audi", modelo: "A3", CV:[150, 300], peso: 1225, puertas:[3,5], capacidadMaletero:320, consumo:{min:5.4, max:9.7} , cambioManual:true, precioBasico:34070, tipoCombustible: ["Gasolina", "Diesel"], fechaFabricación:new Date("2021-02-01"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"geometría variable", cilindrada:[1200 , 2000], velocidades:7, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:280},{tipo:"carbocerámicos", grosor:310}]},

    {"_id": 3,marca: "Audi", modelo: "A7", CV:[204, 600], peso: 1775,puertas:[5], capacidadMaletero:535, consumo:{min:1.7, max:12.8} , cambioManual:true, precioBasico:69540, tipoCombustible: ["Gasolina","Diesel","Híbrido"], fechaFabricación:new Date("2020-04-15"),motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"geometría variable", cilindrada:[2000 , 4000], velocidades:8, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:315},{tipo:"carbocerámicos", grosor:370}]},

    {"_id": 4,marca: "Audi", modelo: "Q7", CV:[231, 507], peso: 2265,puertas:[5], capacidadMaletero:705 , consumo:{min:7.9, max:12.5} , cambioManual:true, precioBasico:70400, tipoCombustible: ["Gasolina","Diesel","Híbrido"], fechaFabricación:new Date("2019-09-10"), motor:{bloque:{capacidad:4,cilindros:8}, inyección:"directa",turbo:"geometría variable", cilindrada:[2000 ,4000 ],velocidades:8, motorenV:false}, tipo:"Todoterreno",frenos:[{ tipo:"pinzas fijas",grosor:300},{tipo:"carbocerámicos", grosor:340}]},

    {"_id": 5,marca: "Audi", modelo: "R8", CV:[540,620], peso: 1660,puertas:[2], capacidadMaletero:112 , consumo:{min:11.3, max:25.4} , cambioManual:true, precioBasico:170000, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2018-10-06"), motor:{bloque:{capacidad:5,cilindros:10}, inyección:"mixta",turbo:"", cilindrada:[5200],velocidades:7, motorenV:true}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:360},{tipo:"carbocerámicos", grosor:405}]},

    {"_id": 6,marca: "BMW", modelo: "Serie 2", CV:[116 ,450], peso: 1525,puertas:[3,5], capacidadMaletero:468 , consumo:{min:2.3, max:10} , cambioManual:true, precioBasico:28850, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2020-03-02"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[1500 ,2000 ],velocidades:7, motorenV:false}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:245},{tipo:"carbocerámicos", grosor:265}]},

    {"_id": 7,marca: "BMW", modelo: "Serie 7", CV:[265,530], peso: 1780,puertas:[5], capacidadMaletero:515 , consumo:{min:2.1, max:9.5} , cambioManual:false, precioBasico:99900, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2019-05-09"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[3000 ,6600 ],velocidades:8, motorenV:false}, tipo:"Sedane",frenos:[{ tipo:"pinzas fijas",grosor:350},{tipo:"carbocerámicos", grosor:410}]},

    {"_id": 8,marca: "BMW", modelo: "X3", CV:[150,510], peso: 2070,puertas:[5], capacidadMaletero:550 , consumo:{min:2.2, max:10.5} , cambioManual:true, precioBasico:41350, tipoCombustible: ["Gasolina","Diesel","Híbrido"], fechaFabricación:new Date("2021-06-08"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"geometría variable", cilindrada:[ 2000,3000 ],velocidades:8, motorenV:false}, tipo:"Sub",frenos:[{ tipo:"pinzas fijas",grosor:310},{tipo:"carbocerámicos", grosor:360}]},

    {"_id": 9,marca: "BMW", modelo: "X6", CV:[265 ,625], peso: 2395,puertas:[5], capacidadMaletero:580 , consumo:{min:7.5, max:12.7} , cambioManual:false, precioBasico:81650, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2019-06-25"), motor:{bloque:{capacidad:3,cilindros:6}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[3000 ,4400 ], motorenV:false}, tipo:"Todoterreno",frenos:[{ tipo:"pinzas fijas",grosor:320},{tipo:"carbocerámicos", grosor:385}]},

    {"_id": 10,marca: "BMW", modelo: "Z4", CV:[197,340], peso: 1490,puertas:[2], capacidadMaletero:281 , consumo:{min:6, max:7.1} , cambioManual:true, precioBasico:48900, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2018-11-14"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[2000 ,3000 ],velocidades:6, motorenV:false}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:275},{tipo:"carbocerámicos", grosor:325}]},

    {"_id": 11,marca: "Cupra", modelo: "Ateca", CV:[300], peso: 1628,puertas:[5], capacidadMaletero:485 , consumo:{min:8.7, max:10.4} , cambioManual:true, precioBasico:46840, tipoCombustible: ["Gasolina","Híbrido","Diesel"], fechaFabricación:new Date("2019-10-20"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"mixta",turbo:"turbopropulsor", cilindrada:[2000],velocidades:7, motorenV:false}, tipo:"Sub",frenos:[{ tipo:"pinzas fijas",grosor:245},{tipo:"carbocerámicos", grosor:300}]},

    {"_id": 12,marca: "Cupra", modelo: "Born", CV:[204], peso: 1736,puertas:[5], capacidadMaletero:385 , consumo:{min:1.2, max:6.8} , cambioManual:false, precioBasico:34000, tipoCombustible: ["Diesel"], fechaFabricación:new Date("2020-10-08"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"mixta",turbo:"geometría variable", cilindrada:[1400,2000],velocidades:6, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:260},{tipo:"carbocerámicos", grosor:300}]},

    {"_id": 13,marca: "Cupra", modelo: "Formentor", CV:[150,390], peso: 1704,puertas:[5], capacidadMaletero:420 , consumo:{min:1.2, max:8.2} , cambioManual:true, precioBasico:31670, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2019-04-15"), motor:{bloque:{capacidad:2,cilindros:5}, inyección:"mixta",turbo:"turbopropulsor", cilindrada:[1400,2500],velocidades:7, motorenV:false}, tipo:"Sub",frenos:[{ tipo:"pinzas fijas",grosor:220},{tipo:"carbocerámicos", grosor:285}]},

    {"_id": 14,marca: "Cupra", modelo: "Ibiza", CV:[150,200], peso: 1500,puertas:[5], capacidadMaletero:280 , consumo:{min:2.4, max:6.7} , cambioManual:true, precioBasico:25000, tipoCombustible: ["Diesel"], fechaFabricación:new Date("2018-06-05"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"geometría variable", cilindrada:[1200,2000],velocidades:6, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:190},{tipo:"carbocerámicos", grosor:250}]},

    {"_id": 15,marca: "Cupra", modelo: "León", CV:[245,410], peso: 1585,puertas:[5], capacidadMaletero:270 , consumo:{min:1.4, max:11.4} , cambioManual:true, precioBasico:42380, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2020-05-11"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"mixta",turbo:"turbopropulsor", cilindrada:[1400,2500],velocidades:7, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:240},{tipo:"carbocerámicos", grosor:275}]},

    {"_id": 16,marca: "Dacia", modelo: "Dokker", CV:[95,131], peso: 1205,puertas:[5], capacidadMaletero:3000 , consumo:{min:5.2, max:7.2} , cambioManual:true, precioBasico:12310, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2010-07-14"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"indirecta",turbo:"", cilindrada:[1600],velocidades:6, motorenV:false}, tipo:"Furgoneta",frenos:[{ tipo:"pinzas fijas",grosor:215},{tipo:"carbocerámicos", grosor:240}]},

    {"_id": 17,marca: "Dacia", modelo: "Duster", CV:[95,114], peso: 1240,puertas:[5], capacidadMaletero:445 , consumo:{min:1.1, max:6.7} , cambioManual:true, precioBasico:11600, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2013-08-08"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"indirecta",turbo:"", cilindrada:[1000,1600],velocidades:6, motorenV:false}, tipo:"Todoterreno",frenos:[{ tipo:"pinzas fijas",grosor:195},{tipo:"carbocerámicos", grosor:220}]},

    {"_id": 18,marca: "Dacia", modelo: "Logan", CV:[70,95], peso: 1050,puertas:[5], capacidadMaletero:510 , consumo:{min:3.5, max:7.2} , cambioManual:true, precioBasico:9175, tipoCombustible: ["Diesel"], fechaFabricación:new Date("2010-07-13"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"indirecta",turbo:"", cilindrada:[1200,1600],velocidades:6, motorenV:false}, tipo:"Sedane",frenos:[{ tipo:"pinzas fijas",grosor:225},{tipo:"carbocerámicos", grosor:270}]},

    {"_id": 19,marca: "Dacia", modelo: "Sandero", CV:[95,101], peso: 1016,puertas:[3,5], capacidadMaletero: 320, consumo:{min:4.0, max:6.3} , cambioManual:true, precioBasico:7590, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2012-12-02"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"indirecta",turbo:"", cilindrada:[1000,1200],velocidades:6, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:200},{tipo:"carbocerámicos", grosor:235}]},

    {"_id": 20,marca: "Dacia", modelo: "Lodgy", CV:[95,102], peso: 1165,puertas:[5,7], capacidadMaletero: 827, consumo:{min:5.1, max:7.1} , cambioManual:true, precioBasico:11445, tipoCombustible: ["Diesel"], fechaFabricación:new Date("2014-08-04"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"indirecta",turbo:"", cilindrada:[1600],velocidades:6, motorenV:false}, tipo:"Furgoneta",frenos:[{ tipo:"pinzas fijas",grosor:215},{tipo:"carbocerámicos", grosor:250}]},

    {"_id": 21,marca: "Mercedes", modelo: "AMG GT", CV:[522,730], peso:1645 ,puertas:[2], capacidadMaletero: 350, consumo:{min:12.8, max:22.4} , cambioManual:true, precioBasico:185600, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2018-02-03"), motor:{bloque:{capacidad:4,cilindros:8}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[4000],velocidades:7, motorenV:true}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:345},{tipo:"carbocerámicos", grosor:410}]},

    {"_id": 22,marca: "Mercedes", modelo: "Clase A", CV:[116,421], peso: 1550,puertas:[3,5], capacidadMaletero: 370, consumo:{min:1.0, max:9.0} , cambioManual:false, precioBasico:29825, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2009-08-30"), motor:{bloque:{capacidad:3,cilindros:6}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[1500,2400],velocidades:7, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:220},{tipo:"carbocerámicos", grosor:270}]},

    {"_id": 23,marca: "Mercedes", modelo: "Clase C", CV:[156,510], peso: 1545,puertas:[5], capacidadMaletero: 455, consumo:{min:1.2, max:10.1} , cambioManual:false, precioBasico:41105, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2019-01-07"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[2000,3500],velocidades:7, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:360},{tipo:"carbocerámicos", grosor:395}]},

    {"_id": 24,marca: "Mercedes", modelo: "SLS AMG", CV:[500,591], peso: 1735,puertas:[2], capacidadMaletero: 180, consumo:{min:9.3, max:19.9} , cambioManual:true, precioBasico:230000, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2012-11-27"), motor:{bloque:{capacidad:4,cilindros:8}, inyección:"indirecta",turbo:"", cilindrada:[5000,6200],velocidades:8, motorenV:true}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:315},{tipo:"carbocerámicos", grosor:410}]},

    {"_id": 25,marca: "Mercedes", modelo: "CLS", CV:[245,435], peso: 1765,puertas:[3,5], capacidadMaletero: 490, consumo:{min:6.2, max:9.3} , cambioManual:false, precioBasico:70400, tipoCombustible: ["Gasolina", "Diesel"], fechaFabricación:new Date("2018-04-17"), motor:{bloque:{capacidad:3,cilindros:6}, inyección:"directa",turbo:"turbocompresor", cilindrada:[2000,3000],velocidades:7, motorenV:false}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:305},{tipo:"carbocerámicos", grosor:340}]},

    {"_id": 26,marca: "McLaren", modelo: "540C", CV:[540], peso: 1350,puertas:[2], capacidadMaletero: 130, consumo:{min:11.1, max:20.2} , cambioManual:false, precioBasico:120000, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2021-11-12"), motor:{bloque:{capacidad:4,cilindros:8}, inyección:"indirecta",turbo:"turbocompresor", cilindrada:[3800],velocidades:7, motorenV:true}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:340},{tipo:"carbocerámicos", grosor:400}]},

    {"_id": 27,marca: "McLaren", modelo: "720S", CV:[720], peso: 1100,puertas:[2], capacidadMaletero: 0, consumo:{min:15.2, max:27.4} , cambioManual:false, precioBasico:284700, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2021-10-04"), motor:{bloque:{capacidad:5,cilindros:10}, inyección:"indirecta",turbo:"turbocompresor", cilindrada:[5500],velocidades:7, motorenV:true}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:315},{tipo:"carbocerámicos", grosor:360}]},

    {"_id": 28,marca: "Porshche", modelo: "718", CV:[420], peso: 1410,puertas:[2], capacidadMaletero: 150, consumo:{min:10.9, max:17.5} , cambioManual:true, precioBasico:107600, tipoCombustible: ["Gasolina", "Diesel"], fechaFabricación:new Date("2016-04-23"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[2000],velocidades:7, motorenV:false}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:325},{tipo:"carbocerámicos", grosor:375}]},

    {"_id": 29,marca: "Citroen", modelo: "Xsara Picasso", CV:[95,130], peso: 1800,puertas:[5], capacidadMaletero: 1800, consumo:{min:3.2, max:7.1} , cambioManual:true, precioBasico:17000, tipoCombustible: ["Gasolina", "Diesel"], fechaFabricación:new Date("2006-08-15"), motor:{bloque:{capacidad:2,cilindros:3}, inyección:"directa",turbo:"turbopropulsor", cilindrada:[1200,2000],velocidades:6, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:270},{tipo:"carbocerámicos", grosor:295}]},

    {"_id": 30,marca: "Nissan", modelo: "Skyline R34", CV:[280,510], peso: 1650,puertas:[3,5], capacidadMaletero: 350, consumo:{min:7.5, max:17.2} , cambioManual:true, precioBasico:120000, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("1998-02-14"), motor:{bloque:{capacidad:2.6,cilindros:6}, inyección:"directa",turbo:"doble", cilindrada:[2000,4000],velocidades:7, motorenV:true}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:345},{tipo:"carbocerámicos", grosor:385}]},

    {"_id": 31,marca: "Nissan", modelo: "GTR R35", CV:[300,570], peso: 1900,puertas:[3], capacidadMaletero: 410, consumo:{min:9.2, max:22.3} , cambioManual:true, precioBasico:150000, tipoCombustible: ["Gasolina"], fechaFabricación:new Date("2007-05-20"), motor:{bloque:{capacidad:3.8,cilindros:6}, inyección:"directa",turbo:"doble", cilindrada:[2000,4000],velocidades:7, motorenV:true}, tipo:"Coupé",frenos:[{ tipo:"pinzas fijas",grosor:350},{tipo:"carbocerámicos", grosor:370}]},

    {"_id": 32,marca: "Honda", modelo: "Civic", CV:[250,320], peso: 1500,puertas:[3,5], capacidadMaletero: 650, consumo:{min:7.4, max:12.6} , cambioManual:true, precioBasico:41500, tipoCombustible: ["Gasolina","Diesel"], fechaFabricación:new Date("2016-07-09"), motor:{bloque:{capacidad:2,cilindros:4}, inyección:"directa",turbo:"doble", cilindrada:[2000,3000],velocidades:7, motorenV:false}, tipo:"Sportback",frenos:[{ tipo:"pinzas fijas",grosor:280},{tipo:"carbocerámicos", grosor:320}]},
])