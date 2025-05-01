import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../Todoslices/Slice.js'

export const store=configureStore({
    reducer:{ 
        todo:TodoReducer
    }
})