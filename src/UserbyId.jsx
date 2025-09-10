import React from 'react'
import { useEffect,useState} from 'react';

function UserbyId() {
  let id=Math.random
  const [user,setUser]=useState(null)
  useEffect(() => {
    const userdata=async()=>{
      const url = 'https://api.freeapi.app/api/v1/public/randomusers/13';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  setUser(data);
 

} catch (error) {
  console.log(error);
}
    }
    userdata();
  }, [])
  
  return (
    <div>
      {
        user?(
        <h1>{user.data.name.first}</h1> 
          
         
        ):(<h1>Loading</h1>)
      }
    </div>

  )
}

export default UserbyId