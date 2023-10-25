import "./App.css";
import React, {useState} from "react";

import Input from "./components/Input/Input";
import Task from "./components/Task/Task";

function App() {
  const [inputName, setInputName] = useState("");
  // const handleTaskName=(inputName)=>{
  //   setInputName(inputName);
  // }
  return (
    <div className="app">
      <h1>Get things done</h1>
      <Input btnText="Add task"  />
      <Input btnText="Update task"  />
      <Task taskName="Primul task" />
    </div>
  );
}

export default App;
