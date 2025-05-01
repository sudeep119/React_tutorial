import configureStore from 'react-redux'

export const state=configureStore({
    reducer:{
        todo:TodoReducer
    }
})