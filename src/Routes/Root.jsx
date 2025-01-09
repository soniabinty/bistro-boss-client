import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer'
const Root = () => {

  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup') 
  return (
    <div className='max-w-screen-xl mx-auto'>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;