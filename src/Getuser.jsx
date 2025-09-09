import React from "react";
import { useState, useEffect } from "react";

function Getuser() {
    const [User, setUser] = useState([])
  useEffect(() => {
    const userdata = async () => {
      const url =
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setUser(data.data.data)
      } catch (error) {
        console.error(error);
      }
    };
    userdata();
  }, []);

  return (
  <div>
  <h1> Users are</h1>
    {
        User?(
            User.map((item,index)=>(
            <div key={index}>
            <li>name:{item.name.title}{" "}{item.name.first}{" "}{item.name.last}</li>
            <li>email:{item.email}</li>
            <li>gender:{item.gender}</li>
            
            <li>{item.location.coordinates.latitude}</li>
          </div>
            ))
        ):( <p>Loading...</p>)
    }
  </div>
  )
}

export default Getuser;
