'use client'

import { useEffect, useState } from "react";


export default function EditProduct({params}){
  const productId = params.productId
  console.log(productId);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState(false)

  const updateProductData= async ()=>{
    const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: 'PUT',
      // headers: {
      //   'Content-Type': 'application/json', 
      // },
      body: JSON.stringify({ name, price, description }), 
    });
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
    } else {
      console.error('Error fetching data:', response.statusText);
    }
  }

  useEffect(()=>{
    getProductDetail()
  },[])
  const getProductDetail =async ()=>{
    let data = await fetch(`http://localhost:3000/api/products/${productId}`)
    data= await data.json();
    setStatus(data.success)
    setName(data.result.name)
    setPrice(data.result.price)
    setDescription(data.result.description)
  }
  return(
    <div>
      <h2>Edit Product Detail</h2>

      {
        status ? (
          <div>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /><br />
            <input type="text" value={price} placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} /><br />
            <input type="text" value={description} placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)} /><br />
            <button type="submit" onClick={updateProductData}>Update Product</button>
          </div>
        ) : (
          <div>
            <h3>Data Not Found</h3>
          </div>
        )

      }
      
    </div>
  )
}