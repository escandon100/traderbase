import  { React,useState } from 'react';
import { Link, Navigate } from 'react-router';
import axios from 'axios';
import "./userLogin.scss"

const UserLogin = () => {

 
  const [formData , setFormData] = useState({
    email : "",
    password : ""
  })
  const [error, setError] = useState('');

  const handleChange = (e) => {

    setFormData({...formData , [e.target.name] : e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
       const res = await axios.post("http://localhost:5000/api/login/send" , formData)
        
       localStorage.setItem("user-token" , res.data.token)

       navigate("/userDashboard")

    }catch(err){
      setError(err.response?.data?.message || 'Login failed')
    }

  }

  return (
    <div className='userLogin'>
      <img src="logo.png" />
      <form onSubmit={handleSubmit}>
        <h1>User Login</h1>
        <label>Email Address </label>
        <input  type="email" placeholder='name@example.com' name = "email" value={formData.email} onChange={handleChange}/>
        <label>Password </label>
        <input  name = "password" type="password" placeholder='Enter Password' value={formData.password} onChange={handleChange}/>
        <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}

        <p>Forgot your password <Link to="/passwordReset" className='link'>Reset</Link></p>
        <p>Don't have an account yet ? <Link className='link' to="/register">Sign up</Link></p>
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>
       </form>
      
    </div>
  )
}

export default UserLogin
