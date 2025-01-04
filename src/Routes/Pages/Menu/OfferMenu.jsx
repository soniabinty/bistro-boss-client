import React from 'react';
import Heading from '../../../Shared/Heading';
import UseMenu from '../Hooks/UseMenu';
import MenuItem from '../../../Shared/MenuItem';

const OfferMenu = () => {
    const [menu ] = UseMenu()
   
      
          const items = menu.filter(item=> item.category === 'offered');
     
      
      
  return (
    <section className='text-center'>
    <Heading
subHeading={`Don't miss`}
heading ={`today's offer`}></Heading>

<div>
<div className='md:grid grid-cols-2'>
{
 items.map(item => <MenuItem key={item._id} item={item}>
 </MenuItem>)
}
</div>
<button className=' text-center uppercase border-0 mx-auto  btn-outline border-b-4 btn w-1/4 '>ORDER YOUR FAVOURITE FOOD</button>
</div>

 </section>
  );
};

export default OfferMenu;