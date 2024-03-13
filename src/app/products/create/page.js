'use client'

import { useState } from "react";

export default function createProduct(){
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const addProduct = async () => {
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json', 
      // },
      body: JSON.stringify({ name, price, description }), 
    });
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
      clearForm()
    } else {
      console.error('Error fetching data:', response.statusText);
    }
  }
  const clearForm = () =>{
    setName("");
    setPrice("");
    setDescription("");
  }
  return(
    <div>
      <h2>Create Product</h2>
      <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /><br />
      <input type="text" value={price} placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} /><br />
      <input type="text" value={description} placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)} /><br />
      <button type="submit" onClick={addProduct}>Add Product</button>
    </div>
  )
}