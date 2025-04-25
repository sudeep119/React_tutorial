import { useCallback, useEffect, useRef, useState } from "react"
const App=({name,age} )=>{

    const [length,setLength]=useState(8);
    const [number,isNumber]=useState(false);
    const [special,isSpecial]=useState(false);
    const [password,setPassword]=useState("");

    const CreatePass=useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(number) str+="1234567890"
        if(special) str+="!@#$%^&*()_+-="

        for(let i=1;i<=length;i++){
            let ind=Math.floor(Math.random()*str.length)

            pass+=str.charAt(ind)
        }
        setPassword(pass)
    },[number,special,length])//password not used because it changes every time and it re renders for infinite loop

    const valueRef=useRef(null)

    useEffect(()=>{
        CreatePass()
    },[CreatePass])

    return ( 
     <div>
          <div>
            <input type="text" value={password} ref={valueRef} placeholder="password" readOnly/>
            <input type="range" min={6} max={20}  onChange={(event)=>{
              setLength(Number(event.target.value))
            }}/>
            <input type="checkbox" onChange={()=>{
              isNumber((prev)=>!prev)
            }}/>
            <input type="checkbox" onChange={()=>{
              isSpecial((prev)=>!prev)
            }}/>
            <button onClick={()=>{
              valueRef.current?.select()
              window.navigator.clipboard.writeText(password)
            }}>Copy</button>
          </div>
    </div>
  )
}

export default App
