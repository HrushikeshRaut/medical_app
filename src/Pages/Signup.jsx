import React from 'react';
import { useState , useEffect } from "react";
import { resgisteradmin } from '../Services/api';

const initialValue = {
  username: "",
  phoneno: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [userdata , setUser] = useState(initialValue);
  const {username , phoneno , email , password } = userdata ;

  const onValueChange = (e) => {
    setUser({ ...userdata, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    console.log(userdata);
    let response = await resgisteradmin(userdata)
    console.log(response)
    if(response.status !== 200){
       console.log("error")
    }else{
      console.log(response.data[0]);
    }
  }
  return (
        <div>
        <form>
          <div className="user-box">
          <label>UserName : </label>
            <input
              type="text"
              onChange={(e) => onValueChange(e)}
              name="username"
            />
          </div>
          <div className="user-box">
          <label>Phone No:</label>
            <input
              type="tel"
              onChange={(e) => onValueChange(e)}
              name="phoneno"
            />   
          </div>
          <div className="user-box">
          <label>EmailID : </label>
            <input
              type="email"
              onChange={(e) => onValueChange(e)}
              name="email"
            />
          </div>
          <div className="user-box">
          <label>Password : </label>
            <input
              type="password"
              onChange={(e) => onValueChange(e)}
              name="password"
            />
          </div>
         
           
          
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button onClick={() => onSubmit()}> Register</button>
        </form>
      </div>
    )
  }

export default Signup ;