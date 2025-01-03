import React, { useEffect, useState } from 'react';
import Heading from '../../Shared/Heading';

import MenuItem from '../../Shared/MenuItem';

const PopularMenu = () => {

  const [menu , setMenu] = useState([])
  useEffect(() =>{
    fetch('/menu.json')
    .then(res => res.json())
    .then (data => 
      {
        const popularItem = data.filter(item => item.category === 'popular');
      setMenu(popularItem)
      }
    
    
    )
  }, [])
  return (
    <section>
       <Heading
  subHeading={'Click it now'}
  heading ={'from our menu'}></Heading>

  <div className='md:grid grid-cols-2'>
  {
      menu.map(item => <MenuItem key={item._id} item={item}>
    </MenuItem>)
  }
  </div>
    </section>
  );
};

export default PopularMenu;