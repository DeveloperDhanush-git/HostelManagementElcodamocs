import React from 'react'
import Description from '../Components/Description'
import HeroSection from '../Components/HeroSection'
import Images from '../Components/Images'
import Amenities from '../Components/Amenities'


const Home = () => {
  return (
    <div>
    <HeroSection />
      <Images />
      <Amenities />
      <Description />
    </div>
  )
}

export default Home