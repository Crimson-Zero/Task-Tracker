import '../styles/App.css'
import TaskForm from './TaskForm';


function FrontPage() {
  return (
    <div className="App">
      <header className="App-header">
        <p id ="Heading">
          Welcome to the Task Tracker Application
        </p>
        <TaskForm/>
      </header>

    </div>
  );
}

export default FrontPage;