import React from 'react';
import { Link } from 'react-router';
import Countries from "../../components/countries/countries"
import "./register.scss"

const Register = () => {
  return (
    <div className='register'>
      <img src="logo.png" alt="" srcset="" />
      <form action="">
        <h1>Create an Account</h1>
        <div className="names">
          <div className="name">
            <label htmlFor="">First Name</label>
            <input type="text" />             
          </div>          
            <div className="name">
            <label htmlFor="">Last Name</label>
             <input type="text" /> 

          </div>
        </div>
      
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Phone Number</label>
        <input type="text" />
        <div className="names">
          <div className="name">
             <label htmlFor="">Password</label>
            <input type="password" /> 
          </div>
         
          <div className="name">
            <label htmlFor="">Confirm Password</label>
            <input type="password" /> 
          </div>
      
        </div>
        <Countries/>
        <button type="submit">Register</button>
        <p>Already have an account <Link to="/login" className='link'>Login</Link></p>
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>
      </form>
      
    </div>
  )
}

export default Register
