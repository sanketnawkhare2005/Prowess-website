import React, { Children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import RocketAnimation from '../Pages/RocketAnimation/RocketAnimation'
import StarBurstAnimation from '../Pages/RocketAnimation/StarBurstAnimation'
import SpeedArrowsAnimation from '../Pages/RocketAnimation/SpeedArrowsAnimation'
import UniqueArrowsAnimation from '../Pages/RocketAnimation/UniqueArrowsAnimation'
import SingleArrowAnimation from '../Pages/RocketAnimation/SingleArrowAnimation'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
      <main>
        {children}
      </main>
    <Footer/>
    {/* <RocketAnimation /> */}
    {/* <StarBurstAnimation/> */}
    {/* <SpeedArrowsAnimation/> */}
    {/* <UniqueArrowsAnimation/> */}
    <SingleArrowAnimation/>
    </>
  )
}

export default Layout
