// Creating the Schema

const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    Task: {type:String},
    Description:{type:String},
})

const Task = mongoose.model("Task",TaskSchema)
module.exports = Task