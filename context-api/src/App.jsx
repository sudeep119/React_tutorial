import { useEffect, useState } from "react"
import Form from "./components/Form";
import { TodoContext,TodoProvider,useTodo } from "./context/context";
import Item from "./components/Item";


function App() {

    const [todos,setTodos]=useState([])

    const addTodo=(todo)=>{
      setTodos((prev)=>[...prev,{id:Date.now(),...todo}]);
    }

    const updateTodo=(id,todo)=>{
      setTodos((prev)=>prev.map((obj)=>obj.id===id?todo:prev))
    }

    const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((obj)=>obj.id!==id))
    }

    const toggleComplete=(id)=>{
      setTodos((prev)=>prev.map((obj)=>obj.id===id?{...obj,toggle:!obj.toggle}:obj))
    }

    useEffect(()=>{
      const todos=JSON.parse(localStorage.getItem("todos"))

      if(todos && todos.length>0)
        setTodos(todos)
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    console.log(todos.length)
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div>
        <h2>Hellooo</h2>
        <Form/>
        {
          todos.map((todo)=>(
            <div key={todo.id}>
              <Item todo={todo}/>
            </div>
          ))
    
        }
      </div>
    </TodoProvider>
  )
}

export default App
