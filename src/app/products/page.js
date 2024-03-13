import Link from "next/link";
import DeleteProduct from "../component/products/delete";

async function getProducts(){
  
  const response = await fetch('http://localhost:3000/api/products',{cache:"no-cache"}); 
  const jsonData = await response.json();
  return jsonData.data;
}
function deleteProduct(){
  console.log('working');
}
export default async function Products(){
  const products = await getProducts();
  
  return(
    <div>
      
      <h1>Product Page</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(item =>(
              <tr key={item._id}>
                <td>
                  <Link href={`products/${item._id}`}>{item.name}</Link>
                </td>
                <td>
                  <Link href={`products/${item._id}/edit`}>Edit</Link>
                </td>
                <td>
                  <DeleteProduct id={item._id}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}