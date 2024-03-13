import { NextResponse } from "next/server";

export function GET(request){

  const data = [
    {
      first_name:"Ajay",
      last_name:"Mishra",
      faculty:"CS",
      age:20
    },
    {
      first_name:"Anmol",
      last_name:"Mishra",
      faculty:"IT",
      age:30
    },
    {
      first_name:"Sonu",
      last_name:"Mishra",
      faculty:"Math",
      age:25
    },
    {
      first_name:"Sonu",
      last_name:"Mishra",
      faculty:"Math",
      age:25
    }
  ];
  return NextResponse.json({result:data}, {status:200});
}