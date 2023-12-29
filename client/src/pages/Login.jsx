import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from 'react-redux'

const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: #ebe0e5;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper=styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})}

`

const Tittle=styled.h1`
font-style: 24px;
font-weight: 300;
`

const Form=styled.form`
 display: flex;
 flex-direction: column;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;

`
const Button=styled.button`
width: 40%;
border: solid;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
&:disabled{
  color:green;
  cursor:not-allowed;
}
`
const Link=styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
const Error=styled.span`
  color: red;
`
const Login = () => {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const{isFetching,error}=useSelector((state)=>state.user)
  const dispatch=useDispatch()

  const handleClick=(e)=>{
    login(dispatch,{username,password})
  }
   
  return (
    <Container>
    <Wrapper>
        <Tittle>SIGN IN</Tittle>
        <Form>
            <Input placeholder="USERNAME" type='email' onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="PASSWORD" type='password' onChange={(e)=>setPassword(e.target.value)}/>
  
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button> 
            {error && <Error>Something Went Wrong....</Error>}
            <Link>Dont Remember the Password</Link>
            <Link>Create New Account</Link>    
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login
