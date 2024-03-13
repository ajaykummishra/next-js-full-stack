"use client"

import { useState } from "react";

export default function ImportFile(){
  const [file, setFile] = useState('')
  const submit = async(e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set("file", file)
    let result = await fetch("api/upload-file", {
      method:"POST",
      body:data
    })
    result = await result.json()
    console.log(result);
  };
  return(
    <main>
      <h1>Upload Image</h1>
      <form onSubmit={submit}>
        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
        <br/><br/>
        <input type="submit" value="Upload Image" />
      </form>
    </main>
  )
}