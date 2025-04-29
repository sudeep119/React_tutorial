import React, { useState } from 'react'
import { useTodo } from '../context/context'

function Form() {
    const [todo,setTodo]=useState("");
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault();
        addTodo({todo,toggle:false})
        setTodo("")
    }
  return (
    <>
    <div>Form</div>
    <form onSubmit={add}>
        <input type='text' value={todo} placeholder='add todo' onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Form