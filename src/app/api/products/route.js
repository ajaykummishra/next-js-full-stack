import { connection } from "@/lib/connection";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';


export async function GET(){
  let data =[];
  let message = '';
  let success = true;
  let errorMessage = '';
  try {
    await mongoose.connect(connection);
    data = await Product.find();
    await mongoose.connection.close();
    
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

  return NextResponse.json(response)
}


export async function POST(request){

  let data =[];
  let message = '';
  let success = true;
  let statusCode = '';
  let errorMessage = '';
  try {
    const req = await request.json();
    const { name, price, description } = req;
    await mongoose.connect(connection);
    // const newProduct = new Product({
    //   name:"Mobile",
    //   price:18000,
    //   description:"test description"
    // });
    // const newProduct = new Product({
    //   name,
    //   price,
    //   description
    // });

    const newProduct = new Product(req);

    data = await newProduct.save();
    await mongoose.connection.close();
    statusCode = 201
    message = 'Product created successfully'
    // res.status(201).json({ success: true, message: 'Product created successfully' });
  } catch (error) {
    console.log(error);
    success = false
    statusCode = 500
    message = 'Failed to create product'
    errorMessage = error.message
    // res.status(500).json({ success: false, message: 'Failed to create product', error: error.message });
  }
  const response = {
    success: success,
    data: data,
    message: message,
    error: errorMessage,
  };

  return NextResponse.json(response,{status:statusCode})
}