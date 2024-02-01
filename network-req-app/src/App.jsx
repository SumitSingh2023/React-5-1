import React, { useState } from 'react'
import  DataDisplay from './components/DataDisplay'
import './App.css'

function App() {
 const [data,setData] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [error, setError] = useState(null)
 

 async function fetchData(){
  setIsLoading(true)
  try {
    let resp = await fetch('https://fakestoreapi.com/products')

    let final = await resp.json()
    console.log(final)
    setData(final)

    console.log('hello')

  } catch (error) {
    console.log(error)
    setError(error.message)
    console.log(error)
  }finally{
    setIsLoading(false)
  }
 }
  return (
    <>
     <h2 style={{textAlign:"center", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Flipkart</h2>
     <button onClick={fetchData}  disabled={isLoading} style={{marginLeft:"45%", width:"120px", padding:"5px", }}>
      {isLoading ? 'Loading...' : 'Fetch Data'}
     </button>

     {error && <p style={{color:'red'}}>Error:{error}</p>}
     {isLoading && <p style={{textAlign:'center'}}>Loading...</p>}
     {data.length > 0 ? <DataDisplay data={data}/>: <p style={{textAlign:"center"}}>No data availabel</p>}
     
     
    </>
  )
}

export default App
