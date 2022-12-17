import { Routes,Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import TaskPage from "./components/TaskPage";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/TaskPage" element={<TaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
