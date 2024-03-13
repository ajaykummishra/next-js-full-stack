"use client"
import { useState } from "react"

export default function Test(){
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const createProduct = async () =>{
    
    const result = await fetch("http://localhost:3000/api/users",)
    const data = await result.json() 
    if(data.success){

      console.log(data.data);
    }
    else{
      console.log(data.error);
      alert('Something was wrong please try again')
      alert(data.error)
    }
  }

  return(
    <div>
      <h4>Test</h4>
      <button onClick={createProduct}>Test</button>
    </div>
  )
}