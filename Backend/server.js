//import username from './credentials'
//import password from './credentials'

const username = "wajeehrehman"
const password = "piODopKT4wMu64Ds"
const cluster = "cluster0"
const dbname = "Tasks_DB"
const express = require('express');
const mongoose = require('mongoose')
const Router = require("./routes")

const app = express();

app.use(express.json());

const URI = `mongodb+srv://${username}:${password}@${cluster}.5b0drqx.mongodb.net/${dbname}`

console.log(URI)
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('strictQuery', true);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.use(Router);
app.listen(3003, () =>{
    console.log("Server is running on port 3003")
})