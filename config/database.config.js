// const mongoose = require("mongoose");

// const connectToDatabase = () => {
//     mongoose.connect(
//       "mongodb+srv://talinebadran:CiH2YSLnBQTC6zc6@cluster0.4ksv4wh.mongodb.net/"
//     );

//     const db = mongoose.connection;
//     db.on("error", console.error.bind(console, "connection error:"));
//     db.once("open", () => {
//       console.log("Connected to the database");
//     });
//     db.on("disconnected", () => {
//       console.log("Disconnected from the database");
//     });
//   };

//   module.exports = { connectToDatabase };

module.exports = {
  url: 'mongodb+srv://talinebadran:GDrJCHu2sKwWk3XY@cluster0.agtle9i.mongodb.net/'
}