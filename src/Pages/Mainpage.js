import React from 'react'
import Description from '../DynamicComponent/Home/Description'
import HeroSection from '../DynamicComponent/Home/HeroSection'
import Images from '../DynamicComponent/Home/Images'
import Amenities from '../DynamicComponent/Home/Amenities'


const Mainpage = () => {
  return (
    <div>
 
        <HeroSection />
        <Images />
        <Amenities />
        <Description />
        
    </div>
  )
}

export default Mainpage