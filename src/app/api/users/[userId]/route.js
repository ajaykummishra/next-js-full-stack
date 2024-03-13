import { user } from "@/database/db";
import { NextResponse } from "next/server";

export function GET(request,req){
  const userId = req.params.userId
  const userData = user.filter((item)=>item.id===parseInt(userId))
  const statusCode = userData.length==0?404:200
  if (statusCode == 404) {
    return NextResponse.json({result:"Not Data Found", success:false} ,{status:404});
  } else {
    return NextResponse.json({result:userData[0],success:true},{status:200});
  }

}

export async function PUT(request,req){
  let payload = await request.json()
  const userId = req.params.userId
  if(!payload.name || !payload.age || !payload.email || !userId){

    return NextResponse.json({result:"require field not found", success:false},{status:422});
  }
  const userData = user.filter((item)=>item.id===parseInt(userId))
  const statusCode = userData.length==0?404:200
  if (statusCode == 404) {
    return NextResponse.json({result:"Not Data Found", success:false} ,{status:404});
  } else {
    const newData = userData[0]
    newData.name = payload.name
    newData.age = payload.age
    newData.email = payload.email
    return NextResponse.json({result:newData,success:true},{status:200});
  }

}

export function DELETE(request, req){
  
  const userId = req.params.userId

  const userData = user.filter((item)=>item.id===parseInt(userId))
  const statusCode = userData.length==0?404:200
  if (statusCode == 404) {
    return NextResponse.json({result:"Not Data Found", success:false} ,{status:404});
  }
 return NextResponse.json({result:"User Delete Successfully",success:true})
}