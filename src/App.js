import React, { useState } from 'react'
import './App.css'
import Colum from './Colum'


const App =()=>{
  let rend=false
  const [subm,submitted] = useState(rend)
  
  const [oldvalue, newvalue] = useState("")

  // const [sub,newsub] = useState("")
  // let SAMPLE_JSON = []


  
  const submit=(e)=>{
    // newsub(oldvalue)
    // SAMPLE_JSON = JSON.parse(oldvalue)
    submitted(rend=true)
  
  }

 
  

  if(subm===false)
  {
    return(
      <>
  
      <h1 className="head">Paste the json </h1>
      <textarea type="textarea" placeholder="paste the json" value={oldvalue} onChange={(e)=>newvalue(e.target.value)} className="area" ></textarea>
  
      <button className="butt" onClick={submit}>Submit</button>
    
   
      </>
    )
  }
  else{
    return(
      <>
      <h1 className="head">Paste the json </h1>
      <textarea type="textarea" placeholder="paste the json" value={oldvalue} onChange={(e)=>newvalue(e.target.value)} className="area" ></textarea>
   
      <button  className="butt"  onClick={submit}>Submit</button>
      <Colum  data={JSON.parse(oldvalue)}/> 
     
      
      </>
    )

  }

  
 
}

export default App