import {React,useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {register} from "../redux/apiCalls"
import {mobile} from "../Responsive"

const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: #5cd8d2;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper=styled.div`
width: 40%;
padding: 20px;
background-color: white ;
${mobile({width:"75%"})}

`

const Tittle=styled.h1`
font-style: 24px;
font-weight: 300;
`

const Form=styled.form`
 display: flex;
 flex-wrap: wrap;
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement=styled.span`
font-size: 12px;
margin: 10px 0px;
`
const Button=styled.button`
width: 40%;
border: solid;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`
const Web = styled.p`
font-size:12px;
margin:1px 0px;
`


const Register = () => {
  const [inputs,setInputs] =useState({});
  const dispatch = useDispatch();
 
  const handleValidation = () => {
    const { password, confirmPassword, mobile } = inputs;
    if (password !== confirmPassword) {
     alert("confirm password and password has to be same")
      return false;
    
    } else if (mobile.length !== 10) {
      alert("contact number should be equal to 10 digits..");
      return false;
    } 
    return true;
  };

  const handleChange =(e)=>{
    setInputs(
      (prev) =>  {
      return  { ...prev,[e.target.name]:e.target.value}
      }
      )
    }
    console.log(inputs);  

    const handleClick =(e) =>{
      e.preventDefault();
      handleValidation();
      const {username,password,mobile,email} =inputs;
      register(dispatch,{username,password,mobile,email});

    }
  return (
    <Container>
        <Wrapper>
            <Tittle>CREATE AN ACCOUNT</Tittle>
            <Form>
                <Input name="fullname" onChange={handleChange} type="text" placeholder="Full Name" />
                <Input name="email" onChange={handleChange} type="text" placeholder="Email" />
                <Input name="username" onChange={handleChange} type="text" placeholder="username" />
                <Input name="mobile" onChange={handleChange} type="number" placeholder="Mobile Number" />
                <Input name="password" onChange={handleChange} type="password" placeholder="password" />
                <Input name="confirmPassword" onChange={handleChange} type="password" placeholder="confirm password" />
               <Agreement>
                  By creating an account, I consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>  
                <Link to="/login">
                  <Web> ALREADY HAVE AN ACCOUNT LOGIN? </Web>
                </Link>
                 <Button onClick={handleClick}>CREATE</Button> 
                
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
