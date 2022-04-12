import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import {useState ,useEffect} from "react";

export default function ToDo(){
   const [todo,setTodo] = useState([])
   const [task,setTask] = useState("")
   
    function create(ev){
        ev.preventDefault()
        setTodo(oldTask=>{
           setTask("")
           return [...oldTask,task]
        }) 
    }
    
    function value(e){
        setTask(e.target.value) 
    }
    
    return <>
        <div>
            <h1>todo app</h1>
            <form>
                <input type="text" value={task} onChange={value}/>
                <button type='submit' onClick={create}>
                    <FontAwesomeIcon icon={faAdd} />
                </button>
            </form> 
        </div>
        <main>
           <ul>
                {todo.map((element)=>{
                    return <li>{element}</li>
                })}
           </ul>
        </main>
      </>
}


//value={task} get the value from input 
//"onChange"=>{e=>{setTask(e.target.value)} use this to map the value to setTask()

//use "todo" array bcz putting values into arr and calling is easy
//by creating a btn click func to set the value into a list by using setTodo()