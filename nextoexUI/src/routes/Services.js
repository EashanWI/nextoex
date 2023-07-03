import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Service from '../components/Service'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading = "Our Awesome Service"text="There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration"/>
      <Service/>
      <Footer/>
      
    </div>
  )
}

export default Services
