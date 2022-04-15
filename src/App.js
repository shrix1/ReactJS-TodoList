import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {useState} from "react";

export default function ToDo(){
    const [todo,setTodo] = useState([])
    const [task,setTask] = useState("")
    
    const create = e => {
        setTask(e.target.value) 
    }
    
    const diplayTodo = e =>{
        e.preventDefault()    
        setTodo(oldTask => {
            setTask("")
            return [...oldTask,task]
        })
    } 

    return <>
        <div>
            <h1>Todo app</h1>
            <form onSubmit={diplayTodo}>

                <input type="text" value={task} onChange={create}/>

                <button type='submit'>
                    <FontAwesomeIcon icon={faAdd} />
                </button>
                
            </form> 
        </div>
        
        <main>
           <ul>
                {todo.map((elem) =>{
                    return <li>{elem}</li>
                })}
           </ul>
        </main>
    </>
}
