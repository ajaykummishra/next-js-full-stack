import { NextResponse } from "next/server";

export async function GET(request,{params}){

  const studentDetails = params.student
  return NextResponse.json({result:studentDetails})
}