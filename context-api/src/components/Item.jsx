import React from 'react'
import { useTodo } from '../context/context'

function Item({todo}) {
   
  const {deleteTodo} =useTodo()
  console.log(todo.todo)

  const delett=()=>{
      deleteTodo(todo.id);
  }
  return (
    <>
    <div style={{width:'300px', height:'60px',backgroundColor:'yellow'}}>
      <h2>{todo.todo}</h2>
    </div>
    <div>
      <h4>Delete ?</h4>
      <button onClick={delett}>Delete</button>
    </div>
    </>
  )
}

export default Item