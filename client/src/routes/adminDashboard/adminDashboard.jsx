import { useEffect, useState } from 'react';
import axios from 'axios';
import countries from "../../lib/countries"
import "./adminDashboard.scss"
const AdminDashboard = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true); 
  const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  country: '',
});

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

  const handleRegister = async (e) => {
  e.preventDefault();

  try {
      await axios.post('http://localhost:5000/api/register/send', formData); 
      alert('User registered successfully!');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };



  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    window.location.href = '/adminLogin';
  };

  if(loading) return null;

  return (
    <div className='adminDashboard'>
      <h1>Admin Dashboard</h1>


      <div className="register">
      <form onSubmit={handleRegister}>
        <h1>Create an Account</h1>
        <div className="names">
          <div className="name">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
           
          </div>          
            <div className="name">
            <label htmlFor="">Last Name</label>
               <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

          </div>
        </div>
      
        <label htmlFor="">Email</label>
          <input
              type="email"
              value={formData.email}
              placeholder='name@gmail.com'
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
        <label htmlFor="">Phone Number</label>
          <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
        <div className="names">
          <div className="name">
             <label htmlFor="">Password</label>
             <input
              type="text"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
         
          <div className="name">
            <label htmlFor="">Confirm Password</label>
             <input
              type="text"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          </div>
      
           <label>Country</label>
         <select
          name="country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        >
          <option value="">Select a country</option>
          {countries.map((country, idx) => (
            <option key={idx} value={country}>
              {country}
            </option>
          ))}
        </select>


        <button type="submit">Register</button>
        <p>© Copyright 2025   Trader Base FX   All Rights Reserved.</p>

      </form>
      <button onClick={handleLogout}>Logout</button>
      
      </div>
    </div>
  );
}


export default AdminDashboard