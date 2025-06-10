import {createSlice} from '@reduxjs/toolkit'

const initialState={
    todos:[{
        id:1,
        naam:"Sudeep"
    }]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{

        addTodo:(state,action)=>{
            
            const todo={
                id:2,
                naam:action.payload
            }
            state.todos.push(todo)
        }
        ,
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                todo.id!=action.payload
            })
        },
        updateTodo:(state,action)=>{
            const {id,newMsg}=action.payload
            const todo=state.todos.find(todo=>todo.id===id)
            if(todo){
                todo.naam=newMsg;
            }
        }
    }
})

export const {addTodo , removeTodo,updateTodo}= todoSlice.actions

export default todoSlice.reducer