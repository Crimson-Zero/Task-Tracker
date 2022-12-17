import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../styles/Taskform.css'



function TaskForm(){
  
  let [confirm,setConfirm] = useState()
  let [Error,setError] = useState()
  let [Task_data,setTask]=useState(
    {
      Task : "",
      Description : "",
    }
  )
  
  const navigate = useNavigate()
  let handleChange = (e) =>{
    let name = e.target.name
    let value = e.target.value
    Task_data[name] = value
    setTask(Task_data)
  }
  let validate = () => {
    let Error_message = "";

    if (!Task_data.Task) {
      Error_message = "Error: Please fill all the details";
      setError(Error_message)
      return false
    }

    if (!Task_data.Description) {
      Error_message = "Error: Please fill all the details";
      setError(Error_message)
      return false
    }
    
    if (!Error_message) {
      let confrim_message = "Your task has been added successfully you can see it in the Task Page"
      setConfirm(confrim_message)
      return true;
    }
  };

  let submit = ()=>{
    let data = {
     Task:Task_data.Task,
      Description :Task_data.Description
   }

   const valid = validate()
   if (valid) {
    console.log(data)
    axios.post('http://localhost:3003/add_task', data
    , {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
    })
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    }); 

   }

 }
 let View = () =>{
  navigate("/TaskPage")
 }

    return(
<form className = "TaskForm">
  <ul className="listitem">
    <li>
      <label for="Task">Title of the Task : </label>
      <input type="text" id="Task" name="Task" onChange={handleChange}/>
    </li>
    <li>
      <label for="Description">Task Description : </label>
      <input type="text" id="Description" name="Description" onChange={handleChange} />
    </li>
    <li>
    <button type="submit"id= "Add_task" onClick={submit}> Add task</button>
    </li>
    <li>
    <button type="submit"id= "View_Task" onClick={View} > View task</button>
    </li>
  </ul>
  <div id = "Error">
    {Error}
  </div>

  <div id = "confirm">
    {confirm}
  </div>
</form>

    );
}

export default TaskForm




