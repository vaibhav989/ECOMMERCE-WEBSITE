import React from 'react'
import './Contacts.scss'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
const Contacts = () => {
  return (
      <div className='contacts'>
          <div className="wrapper">
              <span>BE IN TOUCH WITH US:</span>
              <div className="mail">
                  <input type="text" placeholder='Enter Your E-mail...' /> 
                  <button>JOIN US</button>
              </div>
              <div className="icons">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                  <GoogleIcon />
              </div>
          </div>
    </div>
  )
}

export default Contacts