show dbs 
use harryKart 
show collections
dbb.items.find({price:22000})   


//Deleting items from the mongodb databaseWill delete 1st entry in multi

db.items.deleteOne({price:22000})
db.items.deleteMany()

