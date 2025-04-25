import { useState } from 'react'
import InputBox from './components/inputBox'
import useCurrencyinfo from './hooks/useCurrencyInfo'

function App() {
  const [country, setCountry] = useState('af')
  const data=useCurrencyinfo(country)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data=e.target.elements.cname.value
    setCountry(data.toLowerCase())
  }

  return (
    <>
      <div>
        <InputBox color="blue" text="Helloo" />
        <InputBox color="red" text="This is another" />

        <form name='formName' onSubmit={handleSubmit}>
          <input
            type='text'
            name='cname'
            defaultValue='af'
            placeholder='Enter country code (e.g., af, al)'
          />
          <button type='submit'>Submit</button>
        </form>

        <div>
          <h2>Country information</h2>
          {
            data ? (
              <>
                <h3>Country: {data.country_name}</h3>
                <h3>Currency: {data.currency_name}</h3>
                <h3>Code: {data.currency_code}</h3>
              </>
            ) : (
              <p>No data found</p>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
