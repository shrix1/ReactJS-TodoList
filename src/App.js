import { useState, React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faTrash,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

let index = 0;
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const render = (e) => {
    e.preventDefault();
    const todoList = { todo: value, id: index++, complete: false };
    setTodo([...todo, todoList]);
    setValue("");
  };

  const remove = (ids) => {
    setTodo(todo.filter((item) => item.id !== ids));
  };

  const done = (ids) => {
    setTodo(
      todo.map((i) => {
        if (i.id === ids) {
          return { ...i, complete: true };
        } else {
          return i;
        }
      })
    );
  };

  return (
    <div>
      <form onSubmit={render}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className="text-white">
          <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
        </button>
      </form>

      {todo.map((items) => {
        return (
          <div
            className="text-white flex gap-3"
            key={items.id}
            style={{
              color: items.complete ? "red" : "black",
            }}
          >
            <h6>{items.todo}</h6>
            <h6>{items.id}</h6>
            <button onClick={() => done(items.id)}>
              {" "}
              <FontAwesomeIcon icon={faCrosshairs}></FontAwesomeIcon>
            </button>
            <button onClick={() => remove(items.id)}>
              {" "}
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
