import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/apiCalls'

const Login = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const dispatch=useDispatch()

    const handleClick=(e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
    }

  return (
    
    
 <div    
    style={{
      height: "60vh",
      width:"200vh",
      display: "flex",
      flexDirection: "column",
      // display:"flex",
      alignItems: "center",
      justifyContent: "center",
    }}   
  >
    <div style={{
      height:"100vh",
      width:"200vh",
      display:"flex"
    }}>
      <div style={{
        fontWeight:"bold",
        fontSize:"40px",
        color:"darkblue",
        cursor:"pointer",
        height:"50px",
        width:"1600px",
        background:"blue",
        padding:"10px"
      }}>Admin</div>
    </div>
    
    <h1>Sign In</h1>
    <input
      style={{ padding: 10, marginBottom: 20 }}
      type="text"
      placeholder="username"
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      style={{ padding: 10, marginBottom: 20 }}
      type="password"
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleClick} style={{ padding: 10, width:100 }}>
      Login
    </button>
  </div>
);
};

export default Login
