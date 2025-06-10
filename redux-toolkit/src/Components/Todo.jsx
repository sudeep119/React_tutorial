import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from '../Todoslices/Slice'

function Todo() {
    const [newMsg,SetnewMsg]=useState('')
    const todos=useSelector(state=>state.todo.todos)
    const dispatch=useDispatch()

  return (
    <>  
    <div>
        {todos.map((todo)=>(
            <div key={todo.id} style={{width: "300px",height:"100px", backgroundColor:"blue"}}>
                {todo.naam}
                {todo.id}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
                <input type='text' placeholder='update?' onChange={(e)=>SetnewMsg(e.target.value)}/>
                <button onClick={()=>dispatch(updateTodo({id:2,newMsg:newMsg}))}>Update</button>
            </div>
            
        ))}
    </div>
    </>
  )
}

export default Todo