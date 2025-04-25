import React, { useContext, useState } from 'react'
import UserContextProvider from '../Contexts/userContextProvider'
import userContext from '../Contexts/userContext'

function Index() {

    const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const {setUser}=useContext(userContext)
    console.log('index rendered')
    const onSub=(e)=>{
        e.preventDefault()
        setUser({name,pass})
    }
  return (
    <>
    <div>
        <input type='text' placeholder='username' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={onSub}>Verify</button>
    </div>
    </>
  )
}

export default Index