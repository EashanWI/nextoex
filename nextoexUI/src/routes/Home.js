import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Work from "../components/Work"
import Footer from '../components/Footer'
// import Service from '../components/Service'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      {/* <Service/> */}
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home
