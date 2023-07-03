import "./HeroimgStyles.css";
import IntroImg from "../assets/modern-equipped-computer-lab.jpg"

import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="IntroImg"/>
      </div>
        <div className="content">
           <p> HI I A'M A FULLSTACK DEVELOPER</p>
            <h1>WEB DEVELOPER</h1>
            <div>
             <Link to="/project"
             className="btn">PROJECTS</Link>
             <Link to="/contact"
             className="btn">CONTACT</Link>   
        </div>
      </div>
      </div>
    
  )
}

export default Heroimg
