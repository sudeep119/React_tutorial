import { useEffect, useState } from 'react'
import './App.css'
import Item from './components/Item'
import { TodoProvider } from './context/context'

function App() {
    const [todos,setTudos]=useState([])
    const[msg,setMsg]=useState("Heyy")

    const formSubmit=(e)=>{
        e.preventDefault();
        setTudos((prev)=>[...prev,{id:Date.now(),msg:msg}])
       
    }

    useEffect(()=>{
      console.log(todos)
    },[todos])
    

  return (
    <TodoProvider value={{todos}}> //,addTodo,updateTodo,deleteTodo,completeToggle
      <div>
          <h2>Hellooo</h2>
          <Item/>
          <div>
            <form onSubmit={formSubmit}>
            <h2>Add to do</h2>
            <input type='text' placeholder='enter todo' onChange={(e)=>setMsg(e.target.value)}/>
            <button type='submit'>Submit</button>
            </form>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
