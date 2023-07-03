import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'
import mern from "../assets/mern.jpg"
import mern2 from "../assets/mern2.jpg"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Who Am I</h1>
          <p> TechSolutions is a dynamic IT company that specializes in delivering innovative technology solutions. With a customer-centric approach, we offer a range of services, including software development</p>
         <Link to={"/contact"}> 
         <button className="btn">Contact Us </button>
         </Link>
        </div>


        <div className="right">
            <div className="img-container">
            <div className="img-stack top">
                <img src={mern} 
                className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={mern2} 
                className="img" alt="true"/>
            </div>






            </div>

        </div>
      
    </div>
  )
}

export default Aboutcontent
