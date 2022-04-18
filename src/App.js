import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd ,faTrash} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {useState} from "react";

let indexID = 0;

export default function ToDo(){
    const [todo,setTodo] = useState([])
    const [value,setValue] = useState("")

    const getValue = e =>{
      setValue(e.target.value)
    }

    const render = e =>{
        e.preventDefault()
        setTodo(oldTodo=>{
            setValue("")
            return [...oldTodo,{todo: value, id: indexID++}]
        })
    }

    // const delTodo = itemID =>{
    //     setTodo(oldTodo=>oldTodo.filter(i => i.id !== itemID))
    // }
    
    return <>
        <div>
            <h1>React Todo App</h1>
            <form onSubmit={render}>
                <input type="text" onChange={getValue} value={value}/>
                <button type="submit">
                    <FontAwesomeIcon icon={faAdd}/>
                 </button>
            </form>
        </div>
        <main>
            <ul>
                {todo.map((item)=>{
                    return<>
                    <div key={item.id}>
                        <li>{item.todo} {item.id}</li>
                        <button /*onClick={()=>delTodo(item.id)}*/ >
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                    </> 
                })}
            </ul>
         </main>
    </>
}