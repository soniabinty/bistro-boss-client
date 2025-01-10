import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { FaCalendar, FaCartShopping } from 'react-icons/fa6';
import { MdAddToPhotos, MdOutlineReviews, MdPayments } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className='min-h-screen w-10/12 m-6 mx-auto flex'>

      <div className=' bg-yellow-300 p-4 w-56'>


        <ul className='space-y-3'>

          <li><NavLink  to={'/dashboard/user'}> 
         <div className='flex items-center gap-1'>
         <FaHome>
          
          </FaHome>
           User Home 
         </div>
            </NavLink></li>

            
          <li ><NavLink to={'/dashboard/reservation'}> 
          <div className='flex items-center gap-1'>
        <FaCalendar></FaCalendar>
          Reservation
         </div>
        
            </NavLink></li>

            <li ><NavLink to={'/dashboard/payment'}> 
            <div className='flex items-center gap-1'>
      <MdPayments />
            Payment history
         </div>
           
            </NavLink></li>


            <li ><NavLink to={'dashboard/cart'}>
            <div className='flex items-center gap-1'>
      <FaCartShopping></FaCartShopping>
            My cart
     </div>
            </NavLink></li>


            <li ><NavLink to={'/dashboard/review'}>
            <div className='flex items-center gap-1'>
      <MdOutlineReviews />
            Add review
     </div>
            </NavLink></li>

            
            <li ><NavLink to={'/dashboard/booking'}> 
            <div className='flex items-center gap-1'>
     <MdAddToPhotos />
            My booking
     </div>
            </NavLink></li>

            <div className="divider"></div>

                
            <li ><NavLink to={'/'}> 
            <div className='flex items-center gap-1'>
     <FaHome/>
           Home
     </div>
            </NavLink></li>

            <li ><NavLink to={'/menu'}> 
            <div className='flex items-center gap-1'>
     <FaSearch />
         Menu
     </div>
            </NavLink></li>

        </ul>

      </div>

      <div className='flex-1 p-5'>

<Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default DashBoard;