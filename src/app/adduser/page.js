"use client"

import { useState } from "react";


export default function AddUser(){
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const addUserData= async ()=>{
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json', 
      // },
      body: JSON.stringify({ name, age, email }), 
    });
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
    } else {
      console.error('Error fetching data:', response.statusText);
    }
  }
  return(
    <div>
      <h4>Add User</h4>
      <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /><br />
      <input type="text" value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} /><br />
      <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br />
      <button type="submit" onClick={addUserData}>Add User</button>
    </div>
  )
}