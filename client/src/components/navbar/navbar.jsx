import { React , useState } from 'react';
import { Link } from 'react-router';
import Trade from './links/trade/trade';
import Education from './links/education/education';
import About from './links/about/about';


import "./navbar.scss";

const Navbar = () => {

    const [activeLink , setActiveLink] = useState("")
    const [trade , setTrade ] = useState(false)
    const [education , setEducation] = useState(false)
    const [about , setAbout] = useState(false)


    const handleTrade  = () => {
        if(activeLink === "trade"){
            setActiveLink("")
        }else{
            setActiveLink("trade")
        }
        if(trade == true){
            setTrade(false)
        }else{
            setTrade(true)
        }
        
    }
    const handleEducation  = () => {
        if(activeLink === "education"){
            setActiveLink("")
        }else{
            setActiveLink("education")
        }
        if(education == true){
            setEducation(false)
        }else{
            setEducation(true)
        }
    }
    const handleAbout  = () => {
        if(activeLink === "about"){
            setActiveLink("")
        }else{
            setActiveLink("about")
        }
        if(about == true){
            setAbout(false)
        }else{
            setAbout(true)
        }
        
    }




  return (
    <div className='navbar'>
        <div className="logo">
            <img src="logo.png" alt="" />

        </div>
        <div className="links">
            <ul>
                <li><Link onClick={handleTrade} className={`link ${activeLink === "trade" ? "active" : ""}`}>TRADE <img className="arrow" src="right-arrow.png" alt="" /></Link></li>
                <li><Link onClick={handleEducation} className={`link ${activeLink === "education" ? "active" : ""}`}>EDUCATION & ANALYTICS<img className="arrow" src="right-arrow.png" alt="" /></Link></li>
                <li><Link onClick={handleAbout}className={`link ${activeLink === "about" ? "active" : ""}`}>ABOUT COMPANY <img  className="arrow" src="right-arrow.png" alt="" /></Link></li>
            </ul>
            {trade ? <Trade className="trade"/> : ""}
            {education ? <Education className="education"/> : ""}
            {about ? <About className="about"/> : ""}


           

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
