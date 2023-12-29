import React from 'react'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import{mobile} from "../Responsive"
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate} from 'react-router-dom';
import { logout } from '../redux/userRedux';

const Container=styled.div`
    height: 60px;
   ${mobile({height:"50px"})}
`
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center ;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`
const Left=styled.div`
   flex: 1;
   display: flex;
   align-items: center;

`
const Laguages=styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}

`
const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`
const Input=styled.input`
      border:none ;
      ${mobile({width:"50px"})}

`
const Center=styled.div`
   flex: 1;
   text-align: center;
   
`
const Logo=styled.h1`
    font-weight: bold;
    color: black;
    ${mobile({fontSize:"24px"})}

`
const Right=styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   ${mobile({flex:2,justifyContent:"center"})}

`
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    color: black;
    margin-left:25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}

`
const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity)

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleRegister=()=>{
      navigate("/register");
    }
  
    const handleLogin=()=>{
      navigate("/login");
    }
    const logOut = ()=>{
      dispatch(logout());
      navigate("/login");
    }

  return (
    <Container>
        <Wrapper>
            <Left>
{                <Laguages onClick={logOut}><LogoutOutlinedIcon/></Laguages>
}                <SearchContainer>
                    <Input placeholder='Search'/>
                    <SearchOutlinedIcon style={{color:'gray',fontSize:16}}/>
                                   
                </SearchContainer>
            </Left>
            <Link to="/">
            <Center><Logo>DREss. </Logo></Center>
            </Link>
            <Right>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
                <MenuItem onClick={handleLogin}>Sign In</MenuItem>
                <Link to="/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon/>
                </Badge>
               </MenuItem>
                </Link>
            </Right>
            
        </Wrapper>
    </Container>
  )
}

export default Navbar
