import "./App.css";

import Input from "./components/Input/Input";
import Task from "./components/Task/Task";

function App() {
  return (
    <div className="app">
      <h1>Get things done</h1>
      <Input btnText="Add task"/>
      <Input btnText="Update task"/>
      <Task></Task>
    </div>
  );
}

export default App;
