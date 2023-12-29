import React from 'react'
import Navbar from '../components/Navbar'
import Annoncement from '../components/Annoncement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Product from '../components/Product'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Annoncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Product/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
