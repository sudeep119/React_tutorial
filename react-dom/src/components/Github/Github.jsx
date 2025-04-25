import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState([])

    // useEffect(()=>{const dataa=fetch('https://api.github.com/users/sudeep119')
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    //     console.log(data)},[])

    const data=useLoaderData()
    
  return (
    <>
        <div>
            <h2>Followers: {data.followers}</h2>
            <h2>Repos: {data.public_repos}</h2>
        </div>
    </>
  )
}

export default Github