import React, { useEffect } from 'react'

function GetRandomuser() {

   useEffect(()=>{
        const randomId = Math.floor(Math.random() * 101); //user of 0-100

    const getuser=async()=>{
     const url = `https://api.freeapi.app/api/v1/public/randomusers/${randomId}`;
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
    }
    getuser();
   },[])

  return (
    <div>GetRandomuser</div>
  )
}

export default GetRandomuser