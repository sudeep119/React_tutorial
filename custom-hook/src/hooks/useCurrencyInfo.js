//Custom hook
import {useState,useEffect} from 'react'

function useCurrencyinfo(currency){
    const [data,setData]=useState({})

    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/exchange-api/country.json')
        .then((res)=>res.json())
        .then((res)=>{setData(res[currency])})
    },[currency])
    console.log(data)
    return data;
}

export default useCurrencyinfo;

