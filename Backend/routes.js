// Since this application is present on the local system only hence the endpoint will be localhost/endpoint if
// it was deployed somewhere then it would be "URL/endpoint"
//for mongose if you want to test with postman set the header content-type to application json


const express = require("express")
const cors = require("cors")
const Taskmodel = require("./models")

const app = express();

app.use(cors())

app.post("/add_task", async (req, res) => {
    console.log(req)
    const Task = new Taskmodel({
        Task: req.body.Task,
        Description: req.body.Description
    });


    try{
        const newTask = await Task.save();        
        res.status(201).json(newTask)

    }catch(err){
        res.status(500).json(err)
    }
});
app.get("/tasks", async (req, res) => {
    try{
        const filter = {};
        const tasks = await Taskmodel.find(filter)
        console.log("the tasks are", tasks) 
        res.status(200).json(tasks)
    }catch(err){
        res.status(500).json(err)
        console.log(err)
    }
});

app.delete("/delete/:Task", async (req, resp) => {
    console.log(req.params)
    let data = await Taskmodel.deleteOne(req.params);
    resp.send(data);
})


module.exports = app;
