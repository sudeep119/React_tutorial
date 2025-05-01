const initialState=[{
    id:1,
    naam:"Sudeep"
}]

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{

        addTodo:(state,action)=>{
            
            const todo={
                id:Date.now(),
                naam:action.payload
            }
        }

    }
})