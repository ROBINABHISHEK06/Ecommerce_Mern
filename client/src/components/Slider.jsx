import React, { useState,useEffect } from "react";
import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from "../data";
import {mobile} from "../Responsive"

const Container = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none"})}

`
const Arrow =styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: ${props=>props.direction==='left'&&'10px'};
    right: ${props=>props.direction==='right'&&'10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideindex * -100}vw);
`

const Slide=styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    
`
const ImageCont=styled.div`
     height: 100%; 
     flex: 1; 
     margin-top: 50px;
   

`
const Image=styled.img`
    
    margin: 80px;
    height: 80%;
    
    
   
`
const Infoc=styled.div`
    flex: 1;
    padding: 50px;

`
const Tittle=styled.h1`
   font-size: 70px;
`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
      const interval = setInterval(nextSlide, 4000); // Auto slide change every 3 seconds

      return () => {
          clearInterval(interval); // Clear interval on component unmount
      };
  }, []); 
  return (
    <Container>
       <Arrow direction='left' onClick={() => setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1))}>
         <ArrowLeftIcon/>
       </Arrow>
        <Wrapper slideindex={slideIndex} >
              {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
            <ImageCont> 
                <Image  src={item.img} style={{height:500, width:400}}/>
                
                
            </ImageCont>
            <Infoc>
              <Tittle>{item.title}</Tittle>
              <Desc>{item.desc} </Desc>
              <Button>SHOW NOW</Button>              
            </Infoc>
            </Slide>
              ))}
            
           
        </Wrapper>
            
       <Arrow direction='right' onClick={nextSlide}>
         <ArrowRightIcon/>
       </Arrow>
    </Container>
  )
}

export default Slider
