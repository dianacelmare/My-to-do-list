import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Task = (props) => {
  return (
    <div className="task-container">
      {props.taskName}
      <div className="icons">
        <FontAwesomeIcon icon={icon({ name: "pen-to-square" })} />
        <FontAwesomeIcon
          icon={icon({ name: "trash" })}
          onClick={() => props.deleteTask(props.taskId)}
        />
      </div>
    </div>
  );
};

export default Task;
