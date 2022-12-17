import React, { useState } from "react";
import axios from "axios";
import '../styles/TaskPage.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"



function TaskPage(){
    
    let [Task_array,setTask] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
    axios.get("http://localhost:3003/tasks")
    .then(response=>{

        setTask(response.data)
    })
  });

  let DeleteTask =(event)=>{
    console.log(event)

    axios.delete(`http://localhost:3003/delete/${event}`).then(
        response => { 
               console.log(response)
             })
  }
  let Homepage = () =>{
    navigate("/")
  }
    //console.log(Task_array)
    let task_data = Task_array.map((item) => {

        return (
        <tbody>
         <tr>
         <td className= "Task_data">{item.Task}</td>
         <td className= "Task_description">{item.Description}</td> 
         <td className= "delete_button"> 
         <button type="submit" id= "complete_button" onClick = {DeleteTask.bind(this,item.Task)}>Task Completed
          </button>
          </td>         
          </tr> 
        </tbody>
        )
      })
    

    return (
        <div className="Task_Details">
             <h1 id = "heading">All your tasks are displayed here</h1>
             <table>
                <thead>
                    <td>
                        Task
                    </td>
                    <td>
                    Description
                    </td>
               
                </thead>
                {task_data}
              </table>
            <button type="submit"id= "Home" onClick={Homepage}>Home Page</button>
        </div>
        
    )
}

export default TaskPage