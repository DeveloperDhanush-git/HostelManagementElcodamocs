import React from 'react'
import HostelList from '../DynamicComponent/Explore/HostelList'
import TextConfirmation from '../DynamicComponent/Explore/TextConfirmation'

const Explorepage = () => {
  return (
    <div className="bg-white-100 " style={{ fontFamily: 'Montserrat' }}>
     
      <HostelList />
      <TextConfirmation />
    </div>
  )
}

export default Explorepage