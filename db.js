const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/garage",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("BD connectée");
  }
);

const carsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  created: Date,
});
const carModel = mongoose.model("cars", carsSchema);

// carModel.create([
//   {
//     brand: "Renault",
//     model: "Espace",
//     year: 1999,
//     created: new Date(),
//   },
//   {
//     brand: "Renault",
//     model: "Scenic",
//     year: 2004,
//     created: new Date(),
//   },
//   {
//     brand: "Peugeot",
//     model: "308",
//     year: 2017,
//     created: new Date(),
//   },
// ]);

// carModel.find({
//   _id: "62f7aa106cf0c2a1f78f9849"
// }).then((response)=> console.log(response));

// carModel
//   .updateOne({ _id: "62f7aa106cf0c2a1f78f9849" }, { year: 2000 })
//   .then((response) => {
//     console.log(response);
//   });

// carModel
//   .deleteMany({
//     brand: "Renault",
//   })
//   .then((response) => {
//     console.log(response);
//   });

// carModel.find({
//   year: {$gt: 2015}
// }).then(response => console.log(response));

// carModel.find({
//   model: /o/
// }).then(response => console.log(response));

// carModel.insertMany([
//   {
//     brand: "Aston Martin",
//     model: "DB9",
//     year: 2010,
//   },
//   {
//     brand: "Range Rover",
//     model: "Discovery",
//     year: 2017,
//   },
// ]).then(response => console.log(response));