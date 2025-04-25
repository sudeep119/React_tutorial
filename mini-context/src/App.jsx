import { useState } from 'react'
import './App.css'
import Index from './Components'
import Msg from './Components/msg'
import UserContextProvider from './Contexts/userContextProvider'

function App() {

  return (
      <UserContextProvider>
      <Index/>
      <Msg/>
      </UserContextProvider>
  )
}

export default App
