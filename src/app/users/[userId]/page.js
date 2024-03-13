async function getUsers(userId){
  
  const response = await fetch(`http://localhost:3000/api/users/${userId}`); 
  const jsonData = await response.json();
  return {status:jsonData.success,result:jsonData.result};
}
export default async function UserDetails({params}){

  const data = await getUsers(params.userId);
  const status = data.status
  const userData = data.result

  return(
    <div>
      <h3>User Details Page</h3>
      {
        status ? (
          <div>
            <h3>Name : {userData.name}</h3>
            <h3>Age : {userData.age}</h3>
            <h3>Email : {userData.email}</h3>
          </div>
        ) : (
          <div>
            <h3>Data Not Found</h3>
          </div>
        )

      }
      
    </div>
  )
}