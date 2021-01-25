// getting-started.js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/harryKart", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("we are connected bro");
});

const kittySchema = new mongoose.Schema({
  name: String,
});
kittySchema.methods.speak = function () {
    const greeting =  "Meow name is " + this.name
    //   console.log(greeting);
  }
var Kitten = mongoose.model('harryKitty', kittySchema);


var harryKitty = new Kitten({ name: 'harryKitty' });
var harryKitty2 = new Kitten({ name: 'harryKitty2' });

// console.log(harryKitty.name); // 'Silence'
harryKitty.speak();


harryKitty.save(function (err, harryKitty) {
    if (err) return console.error(err);
    harryKitty.speak();
  });
  harryKitty2.save(function (err, k) {
    if (err) return console.error(err);
    k.speak();
  });

  Kitten.find({name:"harryKitty2"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })