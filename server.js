const express = require("express");
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// const { connectToDatabase } = require("./config/database.config");

const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
  res.json({"message": "Hello Crud Node Express"});
});

// connectToDatabase();

const UserRoute = require('./routes/user')
app.use('/user', UserRoute)

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});