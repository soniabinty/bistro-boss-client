import React from 'react';
import UseMenu from '../Hooks/UseMenu';
import Cover from '../../../Shared/Cover';
import MenuItem from '../../../Shared/MenuItem';
import img from '../../../assets/menu/salad-bg.jpg'
import { Link } from 'react-router-dom';

const Salads = () => {
  const [menu ] = UseMenu()
   
      
  const items = menu.filter(item=> item.category === 'salad');
  return (
    <div className='mt-6 text-center'>
        <Cover img={img}
      subHeading={' Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '}
      heading ={'salads'}>

      </Cover>

      <div className='mt-6'>
<div className='md:grid grid-cols-2'>
{
 items.map(item => <MenuItem key={item._id} item={item}>
 </MenuItem>)
}
</div>
<Link to={'/order/salad'}>
<button className=' text-center uppercase border-0 mx-auto  btn-outline border-b-4 btn w-1/4 '>ORDER YOUR FAVOURITE FOOD</button>
</Link>
</div>
    </div>
  );
};

export default Salads;