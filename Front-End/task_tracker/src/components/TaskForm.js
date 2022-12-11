import '../styles/Taskform.css'
function TaskForm(){
    return(

<form className = "TaskForm">
  <ul className="listitem">
    <li>
      <label for="task">Title of the Task</label>
      <input type="text" id="task" name="task" />
    </li>
    <li>
      <label for="Description">Task Description</label>
      <input type="text" id="Description" name="Description" />
    </li>
    <li>
    <button type="submit">Add your task</button>
    </li>
  </ul>
</form>

    );
}

export default TaskForm




