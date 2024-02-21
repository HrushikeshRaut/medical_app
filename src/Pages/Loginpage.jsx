import React from 'react'
import { useState , useEffect } from "react";
import { resgisteradmin } from '../Services/api';

const initialValue = {
  username: "",
  password: ""
};

const Loginpage = () => {
  const [userdata , setUser] = useState(initialValue);
  const {username , password } = userdata ;

  const onValueChange = (e) => {
    setUser({ ...userdata, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(userdata);
    let response = await resgisteradmin(userdata);
    console.log(response)
    if(response.status !== 200){
       console.log("error")
    }else{
      console.log(response.data[0]);
    }
  }
  return (
    <div  className='main'>
      <div className='form-admi'>
            <form>
              <h3>Login</h3>
              <div className="user-box">
              <label>UserName : </label>
                <input
                  type="text"
                  onChange={(e) => onValueChange(e)}
                  name="username"
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
                <button onClick={(e) => onSubmit(e)}> Register</button>
            </form>
       </div>
    </div>                  
  )
}

export default Loginpage;