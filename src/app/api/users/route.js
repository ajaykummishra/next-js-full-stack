import { user } from "@/database/db";
import { NextResponse } from "next/server";

export function GET(request){
  
  let data =user;
  let message = '';
  let success = true;
  let errorMessage = '';
  try {
    if(!data[0]){

      success = false
      errorMessage = 'data not fond';
    }
  } catch (error) {
    success = false
    errorMessage = error.message;
  }
  const response = {
    success: success,
    data: data,
    message:message,
    error: errorMessage
  };
  // data = user;
  return NextResponse.json(response,{status:200});
}

export async function POST(request){
  let payload = await request.json()
  if(!payload.name || !payload.age){

    return NextResponse.json({result:"require field not found", success:false},{status:422});
  }
  return NextResponse.json({result:'new user created',data:payload, success:true},{status:201});
}