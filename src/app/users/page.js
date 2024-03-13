import Link from "next/link";
import DeleteUser from "../component/users/delete";

async function getUsers(){
  
  const response = await fetch('http://localhost:3000/api/users'); 
  const jsonData = await response.json();
  return jsonData;
}
function deleteUser(){
  console.log('working');
}
export default async function Users(){
  
  const users = await getUsers();
  return(
    <div>
      
      <h1>User Page</h1>
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
            users.map(item =>(
              <tr key={item.id}>
                <td>
                  <Link href={`users/${item.id}`}>{item.name}</Link>
                </td>
                <td>
                  <Link href={`users/${item.id}/edit`}>Edit</Link>
                </td>
                <td>
                  <DeleteUser id={item.id}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}