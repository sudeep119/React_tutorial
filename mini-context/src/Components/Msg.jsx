import React, { useContext } from 'react'
import userContext from '../Contexts/userContext'

function Msg() {
    const {user}=useContext(userContext)
    console.log('msg rendered')
    if(!user) return<h2>Please enter name</h2>

    return <h2>Welcome {user.name}</h2>
}

export default Msg