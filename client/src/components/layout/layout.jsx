import React from 'react';
import { Outlet } from 'react-router'
import Navbar from '../navbar/navbar';
import License from '../license/license';
import "./layout.scss"
import Reason2 from '../reason2/reason2';

const Layout = () => {


  return (
    <div className='layout'>
       <Navbar/>       
       <Outlet/>
       
       <License/>
    </div>
  )
}

export default Layout