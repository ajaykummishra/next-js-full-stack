"use client"

export default function DeleteUser(props){
  const userId = props.id
  const DeleteUser=async () =>{

    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
      alert(jsonData.result)
    } else {
      const jsonData = await response.json();
      console.error('Error fetching data:', jsonData.result);
    }
  }
  return(
    <button onClick={DeleteUser}>Delete</button>
  )
}