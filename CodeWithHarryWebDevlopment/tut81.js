// Inserting data in Mongodb 
// user harryKart
db.items.insertOne({name:"samsung 30s",price:22000,rating:4.5,qty:400,sold:1000})


db.items.insertMany([{name:"samsung 30s",price:22000,rating:4.5,qty:400,sold:1000},{name:"Moto 30s",price:40000,rating:4.0,qty:400,sold:2000},{name:"QMobile 30s",price:400000,rating:4.0,qty:400,sold:2000,isBig:true}])