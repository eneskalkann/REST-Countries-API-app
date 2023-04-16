import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data,setData]=useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      console.log('data',data);
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div className="App">
      {Array.isArray(data) && data.map((item,index)=>{
        return(
          <div key={index}>
            <img src={item.flags.png} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default App
