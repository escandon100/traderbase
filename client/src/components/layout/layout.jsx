import React from 'react';
import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar';
import License from '../license/license';
import "./layout.scss"

const Layout = () => {
  return (
    <div className='layout'>
       <Navbar/>       
      <div className="content">
       <Outlet/>
      </div>
      <License/>
    </div>
  )
}

export default Layout