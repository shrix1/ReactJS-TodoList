import { React, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "./app";

const Todos = (props) => {
  const { done, remove } = useContext(AppContext);
  return (
    <div
      className="text-white flex gap-3"
      style={{
        color: props.complete ? "red" : "black",
      }}
    >
      <h6>{props.todo}</h6>
      <h6>{props.id}</h6>
      <button onClick={() => done(props.id)}>
        {" "}
        <FontAwesomeIcon icon={faCrosshairs}></FontAwesomeIcon>
      </button>
      <button onClick={() => remove(props.id)}>
        {" "}
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Todos;
