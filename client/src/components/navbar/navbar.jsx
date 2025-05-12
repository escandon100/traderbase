import { React , useRef } from 'react';
import { Link } from 'react-router';
import "./navbar.scss";

const Navbar = () => {

    const handleTrade  = () => {
        
    }
    const handleEducation  = () => {
        
    }
    const handleAbout  = () => {
        
    }




  return (
    <div className='navbar'>
        <div className="logo">
            <img src="logo.png" alt="" />

        </div>
        <div className="links">
            <ul>
                <li><Link onClick={handleTrade} className='link'>TRADE <img className="arrow" src="right-arrow.png" alt="" /></Link></li>
                <li><Link onClick={handleEducation} className='link'>EDUCATION & ANALYTICS<img className="arrow" src="right-arrow.png" alt="" /></Link></li>
                <li><Link onClick={handleAbout}className='link'>ABOUT COMPANY <img  className="arrow" src="right-arrow.png" alt="" /></Link></li>
            </ul>

        </div>
        <div className="account">
            <div className="registration">
                <button>OPEN AN ACCOUNT</button>
            </div>
            <div className="login">
                <button>LOGIN</button>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
