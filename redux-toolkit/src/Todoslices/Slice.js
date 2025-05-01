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
                id:Date.now(),
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
            state.todos
        }
    }
})

export const {addTodo , removeTodo}= todoSlice.actions

export default todoSlice.reducer