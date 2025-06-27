import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [word,setWord]=useState('Enter here')
  const[radio3,setRadio3]=useState(false)

  function onChangeFunc(event){
      setWord(event.target.value)
  }

  function functOnselect(e){
      setRadio3(true)

  }
  return (
    <>
      <input type='text' onChange={onChangeFunc} value={word} placeholder='Enter any text'/>
      <h2>{word}</h2>
      <input id='radio1' type='radio' name='radio'/>
      <label htmlFor='radio1'>Radio 1</label>
      <input id='radio2' type='radio' name='radio'/>
      <label htmlFor='radio2'>Radio 2</label>
      <input id='radio3' type='radio' name='radio' onChange={functOnselect}/>
      <label htmlFor='radio3'>Radio 3</label>
      <h2></h2>
      <div>
      {radio3?<h2>The radio 3 button is selected</h2>:<h2>Not selected</h2>}
      <h2>Helloo world</h2>
      </div>
    </>
  )
}

export default App
