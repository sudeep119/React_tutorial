import React, { useState } from 'react'
import { addTodo,removeTodo } from '../Todoslices/Slice';
import {useDispatch} from 'react-redux'

function TodoAdd() {

const dispatcher=useDispatch()

const[input,Setinput]=useState('')

const TodoHandler=(e)=>{
    e.preventDefault();
    dispatcher(addTodo(input))
    Setinput('')
}
  return (
    <div>
        <form onSubmit={TodoHandler}>
            <input type='text' value={input} placeholder='Enter todo' onChange={(e)=>Setinput(e.target.value)}/>
            <button type='submit'>Enter</button>
        </form>
    </div>
  )
}

export default TodoAdd