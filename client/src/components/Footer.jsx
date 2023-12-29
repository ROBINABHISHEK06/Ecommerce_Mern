import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import {mobile} from "../Responsive"


 const Container=styled.div`
   display: flex;
   ${mobile({flexDirection:"column"})}

 `

 const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`
const Logo=styled.h1`

`
const Des=styled.p`
margin: 20px 0px;
`
const SocialContain=styled.div`
   display: flex;
`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

 const Center=styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({display:"none"})}

 `
const Tittle=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const Listitem=styled.li`
   width :50% ;
   margin-bottom: 10px;
`

 const Right=styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({backgroundColor:"lightgray"})}

 `
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment=styled.img`
`

const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>DRess.</Logo>
        <Des>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Des>
        <SocialContain>
          <SocialIcon color='385999'> 
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color='E4405f'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <TwitterIcon />
          </SocialIcon>
          
        </SocialContain>
        </Left>
            
        
        <Center>
            <Tittle>Useful Links</Tittle>
            <List>
                <Listitem>Home</Listitem>
                <Listitem>Cart</Listitem>
                <Listitem>Man Fashion</Listitem>
                <Listitem>Women Fashion</Listitem>
                <Listitem>Accessories</Listitem>
                <Listitem>My Account</Listitem>
                <Listitem>Order Tracking</Listitem>
                <Listitem>Wishlist</Listitem>
                <Listitem>Wishlist</Listitem>
                <Listitem>Teams</Listitem>
            </List>
        </Center>
        <Right>
            <Tittle>Contact</Tittle>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/> Lorem ipsum dolor sit amet consectet!
            </ContactItem>
            <ContactItem>
                 <PhoneIcon style={{marginRight:"10px"}}/> 8454052255
            </ContactItem>
            <ContactItem>
               <MailIcon style={{marginRight:"10px"}}/> robin1@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
        
    </Container>
  )
}

export default Footer
