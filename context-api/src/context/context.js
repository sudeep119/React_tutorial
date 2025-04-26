    import { createContext, useContext } from "react";

    export const TodosContext=createContext({
        todos:[{
            id:1,
            msg:"To do list",
            completed:false
        }],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id)=>{},
        completeToggle:(id)=>{},
        namee:"USdeeep"
    }
    )

    export const UseTodo=()=>{
        return useContext(TodosContext)
    }

    export const TodoProvider=TodosContext.Provider