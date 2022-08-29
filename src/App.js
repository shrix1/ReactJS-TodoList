import { useState, React, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Todos from "./Todo";

let index = 0;
export const AppContext = createContext();

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const render = (e) => {
    e.preventDefault();
    setTodo([...todo, { todo: value, id: index++, complete: false }]);
    setValue("");
  };

  const remove = (ids) => {
    setTodo(todo.filter((item) => item.id !== ids));
  };

  const done = (ids) => {
    setTodo(
      todo.map((i) => {
        if (i.id === ids) {
          return { ...i, complete: !i.complete };
        } else {
          return i;
        }
      })
    );
  };

  return (
    <AppContext.Provider value={{ done, remove }}>
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
            <Todos
              todo={items.todo}
              id={items.id}
              complete={items.complete}
              key={items.id}
            />
          );
        })}
      </div>
    </AppContext.Provider>
  );
};

export default Todo;
