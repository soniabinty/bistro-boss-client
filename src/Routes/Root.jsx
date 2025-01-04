import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer'
const Root = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;