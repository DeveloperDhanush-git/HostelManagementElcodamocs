import React from 'react'
import Description from '../DynamicComponent/Description'
import HeroSection from '../DynamicComponent/HeroSection'
import Images from '../DynamicComponent/Images'
import Amenities from '../DynamicComponent/Amenities'
import Footer from '../DynamicComponent/Footer'
import MainNavbar from '../DynamicComponent/MainNavbar'

const Home = () => {
  return (
    <div>
         <MainNavbar />
    <HeroSection />
      <Images />
      <Amenities />
      <Description />
      <Footer />
    </div>
  )
}

export default Home