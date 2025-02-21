import React from 'react'
import Navbar from '../DynamicComponent/HomeNavbar'
import HostelList from '../DynamicComponent/HostelList'
import TextConfirmation from '../DynamicComponent/TextConfirmation'

const Homepage = () => {
  return (
    <div className="bg-white-100 " style={{ fontFamily: 'Montserrat' }}>
      <Navbar />
      <HostelList />
      <TextConfirmation />
    </div>
  )
}

export default Homepage