import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises'

export async function POST(req){
  const data = await req.formData()
  const file = data.get('file')
  if(!file){
    return NextResponse.json({success:false, msg:"Image Not Found"}, {status:422});
  }

  const byteData= await file.arrayBuffer()
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}` 
  await writeFile(path, buffer)
  return NextResponse.json({success:true, msg:"File Uploaded Successfully"}, {status:200});
}