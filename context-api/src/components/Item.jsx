import React from 'react'
import { UseTodo } from '../context/context'

function Item() {
    const {namee}=UseTodo()

  return (
    <div><h2>{namee}</h2></div>
  )
}

export default Item