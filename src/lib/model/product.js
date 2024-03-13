import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  // name:String,
  // price:String,
  // description:String
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String
})
export const Product = mongoose.models.products || mongoose.model("products", productModel)