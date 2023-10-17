import Button from "../Button/Button";
import "./Input.css";
import { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value)
    console.log(event.target.value); //asa accesez valoarea introdusa de user
  };

  return (
    <>
      <div className="task-container">
        <input
          type="text"
          placeholder="What is your task for today?"
          onChange={handleInputValue}
          value={inputValue}
        />
        <Button btnText={props.btnText} />
      </div>
    </>
  );
};

export default Input;
