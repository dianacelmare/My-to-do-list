import Button from "../Button/Button";
import "./Input.css";
import { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState(""); //state-il

  const handleInputValue = (event) => {
    setInputValue(event.target.value); //asa accesez valoarea introdusa de user
    console.log(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    props.addTodo(inputValue); // trimit inputValue catre parinte prin props
    setInputValue("");

    // const newTask = inputValue;
    // props.taskName(inputValue)
    // console.log(newTask);
  };
  return (
    <>
      <form className="input-container" onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="What is your task for today?"
          onChange={handleInputValue}
          value={inputValue}
        />
        <Button btnText={props.btnText} />
      </form>
    </>
  );
};

export default Input;
