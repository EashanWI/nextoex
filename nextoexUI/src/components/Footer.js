import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk,FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
              <FaHome size={20}style={{color:"#fff",marginRight:"2rem"}}/>  
            </div>
            <div>
                <p>dinipriya</p>
                <p>divithotawela kanda</p>
                <p>welimada</p>
            </div>
            <div className="phone">
                <h4><FaPhone size={20}style={{color:"#fff",marginRight:"2rem"}}/>  
             1-2344-234-23</h4>
            
            </div>

            <div className="Email">
                <h4><FaMailBulk size={20}style={{color:"#fff",marginRight:"2rem"}}/>  
             ureshpinidiya96@gmail.com</h4>
            
            </div>
            </div>
            <div className="right">
               <h4>About the company</h4> 
               <p>© 2023 NEXTOEX. All rights reserved.
                 NEXTOEX is a leading IT solutions provider, delivering innovative technology solutions to businesses worldwide. Our team of experts specializes in software development, web design, mobile app development, and IT consulting services.</p>
                    <div>
                    <p>Connect with us:</p>
                    </div>
                <div className="social">
                <FaFacebook size={30}style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={30}style={{color:"#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={30}style={{color:"#fff",marginRight:"1rem"}}/>
                <FaInstagram size={30}style={{color:"#fff",marginRight:"1rem"}}/>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
