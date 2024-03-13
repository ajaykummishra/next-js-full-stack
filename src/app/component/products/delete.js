"use client"
import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
  const router = useRouter()
  const productId = props.id
  const DeleteProduct=async () =>{

    const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
      alert(jsonData.message)
      router.push("/products")
    } else {
      const jsonData = await response.json();
      console.error('Error fetching data:', jsonData.result);
      alert('Error fetching data: '+jsonData.message)
    }
  }
  return(
    <button onClick={DeleteProduct}>Delete</button>
  )
}