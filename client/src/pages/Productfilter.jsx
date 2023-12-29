import {React,useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoncement from '../components/Annoncement'
import Product from '../components/Product'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from "../Responsive"
import { useLocation } from 'react-router-dom'

const Container=styled.div`

`
const Tittle=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`

const Filter=styled.div`
margin: 20px;
${mobile({width:"0px 20px",display:"flex", flexDirection:"column"})}

`
const Filtertext=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    
`
const Select=styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 12px"})}

`
const Option=styled.option`
    
`

const Productfilter= () => {
  const location=useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort,setSort]=useState("newest")


  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar/>
      <Annoncement/>
      <Tittle>{cat}</Tittle>
      <FilterContainer>
         <Filter>
            <Filtertext>Filter Products</Filtertext>
            <Select name="color" onChange={handleFilters}>
                <Option disabled >Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
                <Option disabled >Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
         <Filter>
            <Filtertext>Short Product</Filtertext>
            <Select onChange={(e)=>setSort(e.target.value)}>
                <Option value="newest">All Prices</Option>
                <Option value="asc">Rs 100-500</Option>
                <Option value="desc">500-1,000 </Option>
                <Option value="desc">1,000-2,000 </Option>
            </Select>
            </Filter>
      </FilterContainer>
      <Product cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
    
  )
}

export default Productfilter
