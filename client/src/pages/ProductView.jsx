import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoncement from '../components/Annoncement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import {mobile} from "../Responsive"
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container=styled.div``
const Wrapper=styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px", flexDirection:"column"})}

`
const Imagecontainer=styled.div`
flex:1;
`
const Image=styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}

`
const Infoc=styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}

`
const Tittle=styled.h1`
  font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
`
const Price=styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: lightsalmon;
  }
`;

const ProductView = () => {
  const location=useLocation()
  const id = location.pathname.split("/")[2]
  const [product,setProduct]=useState({})
  const [quantity,setQuantity]=useState(1)
  const [color,setColor]=useState("")
  const [size,setSize]=useState("")
  const dispatch=useDispatch()


  useEffect(()=>{
    const getProduct=async()=>{
      try{
        const res=await publicRequest.get("products/find/"+id)
        setProduct(res.data)
      }catch{}
    }
     getProduct()
  },[id])

  const handleQuantity=(type)=>{
    if(type==="dec"&& quantity>1){
      setQuantity(quantity-1)
    }else{ 
      setQuantity(quantity+1)
    }
  }
  const handleclick=()=>{
    dispatch(addProduct({...product,quantity,color,size}))
  }

  return (
    <Container>
      <Navbar/>
      <Annoncement/>
      <Wrapper>
        <Imagecontainer>
            <Image src={product.img} />
        </Imagecontainer>
        <Infoc>
            <Tittle>{product.title}</Tittle>
            <Desc>{product.desc}</Desc>
            <Price>RS:{product.price}</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
              {product.size?.map((s) => (
                 <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveOutlinedIcon onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <AddOutlinedIcon onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleclick}>ADD TO CART</Button>
          </AddContainer>
        </Infoc>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductView
