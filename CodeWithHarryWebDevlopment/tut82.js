// Searching for data in Mongodb 
// user harryKart
//This query will give all the objects with rating equal to 3.5
db.items.find({rating:{$gte:3.5}})
db.items.find({rating:{$gt:3.5}})

//And operator
db.items.find({rating:{$gt:3.5},price:{$gt:4000}})
db.items.find({rating:{$lt:3.5},price:{$lt:100000}})
db.items.find({rating:{$gt:3.5},price:{$lt:100000}})
db.items.find({rating:{$gt:3.5},price:{$lt:100000}})
//Or operator
db.items.find({
    $or:[{rating:{$gt:3.5}},{price:{$lt:100000}}]})


//projection
db.items.find({rating:{$gt:3.5}},{rating: 1})


