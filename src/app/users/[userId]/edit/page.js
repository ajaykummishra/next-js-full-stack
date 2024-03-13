'use client'

import { useEffect, useState } from "react";


export default function EditUser({params}){
  const userId = params.userId

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(false)

  const updateUserData= async ()=>{
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'PUT',
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

  useEffect(()=>{
    getUserDetail()
  },[])
  const getUserDetail =async ()=>{
    let data = await fetch(`http://localhost:3000/api/users/${userId}`)
    data= await data.json();
    setStatus(data.success)
    setName(data.result.name)
    setAge(data.result.age)
    setEmail(data.result.email)
  }
  return(
    <div>
      <h2>Edit User Detail</h2>

      {
        status ? (
          <div>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /><br />
            <input type="text" value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} /><br />
            <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br />
            <button type="submit" onClick={updateUserData}>Update User</button>
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