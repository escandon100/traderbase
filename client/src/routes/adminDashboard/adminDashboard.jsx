import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import "./adminDashboard.scss"
const AdminDashboard = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    if (!token) {
      window.location.href = '/adminLogin';
      return;
    }

    axios
      .get('/api/admin/adminDashboard', {
        headers: {
          'x-auth-token': token,
        },
      })
      .then((res) => {
        setMessage(res.data.message)
        setLoading(false)
      
      }
      )
      .catch(() => {
        localStorage.removeItem('admin-token');
        window.location.href = '/adminLogin';
      });
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    window.location.href = '/adminLogin';
  };

  if(loading) return null;

  return (
    <div className='adminDashboard'>
      <h1>Admin Dashboard</h1>


      <div className="register">
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
        <input type="email" placeholder='name@example.com' />
        <label htmlFor="">Phone Number</label>
        <input type="text" />
        <div className="names">
          <div className="name">
             <label htmlFor="">Password</label>
            <input type="password" /> 
          </div>
         
          <div className="name">
            <label htmlFor="">Confirm Password</label>
            <input  type="password" /> 
          </div>
      
        </div>
        <button type="submit">Register</button>
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>

      </form>
      <button onClick={handleLogout}>Logout</button>
      
      </div>
    </div>
  );
}


export default AdminDashboard