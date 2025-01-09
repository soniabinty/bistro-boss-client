import React, { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';

const NavBar = () => {
  const {user ,signOutUser} = useContext(AuthContext)

  const handleLogout = () =>{
    signOutUser()
  }
  const links = <>
 
  <li > 
     <NavLink  to={'/'}>Home

  </NavLink>
 </li>

  <li > 
     <NavLink  to={'/menu'}>Our Menu

  </NavLink>
 </li>

 <li > 
     <NavLink  to={'/order/salad'}>Order Food

  </NavLink>
 </li>

 

 <li > 
     <NavLink  to={'/signup'}>Sign Up

  </NavLink>
 </li>

  {
    user? <><button onClick={handleLogout} className='btn'>Log Out</button></> : <><li > 
     <NavLink  to={'/login'}>Login

  </NavLink>
 </li>
</>
  }

 </>
  return (
    <div className="navbar z-10 fixed max-w-screen-xl text-white bg-black bg-opacity-30">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl uppercase">bistro boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
{links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

export default NavBar;