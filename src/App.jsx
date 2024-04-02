import "./App.css";
import React, { useState } from "react";

import Input from "./components/Input/Input";
import Task from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState([]); //am decalarat o lista goala de task-uri
  const addTodo = (task) => {
    let index = tasks.length;
    setTasks([
      ...tasks, //op de destructuring - ia tot ce e in task, iar ce e dupa virgula e adaugat sau modificat
      {
        id: index + 1,
        taskName: task,
        isEditing: false,
      },
    ]);
    console.log("tasks", tasks);
    console.log("Task adaugat", task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Get things done</h1>
      <Input btnText="Add task" addTodo={addTodo} />
      <Input btnText="Update task" />
      {tasks.map((task, index) => (
        <Task
          taskName={task.taskName}
          taskId={task.id}
          key={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
