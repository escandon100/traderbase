import React from 'react';
import { Link } from 'react-router';
import "./login.scss"

const Login = () => {
  return (
    <div className='login'>
      <img src="logo.png" />
      <form action="">
        <h1>User Login</h1>
        <label>Email Address </label>
        <input  type="email" placeholder='name@example.com'/>
        <label>Password </label>
        <input type="password" placeholder='Enter Password'/>
        <button type="submit">Login</button>
        <p>Forgot your password <Link to="/passwordReset" className='link'>Reset</Link></p>
        <p>Don't have an account yet ? <Link className='link' to="/register">Sign up</Link></p>
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>
       </form>
      
    </div>
  )
}

export default Login
