import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../Todoslices/Slice'

function Todo() {
    const todos=useSelector(state=>state.todo.todos)
    const dispatch=useDispatch()
  return (
    <>  
    <div>
        {todos.map((todo)=>(
            <div key={todo.id} style={{width: "300px",height:"100px", backgroundColor:"blue"}}>
                {todo.naam}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            </div>
            
        ))}
    </div>
    </>
  )
}

export default Todo