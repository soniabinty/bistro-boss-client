import React from 'react';
import Cover from '../../../Shared/Cover';
import MenuItem from '../../../Shared/MenuItem';
import UseMenu from '../Hooks/UseMenu';
import img from '../../../assets/menu/soup-bg.jpg'
import { Link } from 'react-router-dom';

const Soups = () => {
  const [menu ] = UseMenu()
   
      
  const items = menu.filter(item=> item.category === 'soup');
  return (
    <div className='mt-6 text-center'>
        <Cover img={img}
      subHeading={' Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '}
      heading ={'soups'}>

      </Cover>

      <div className='mt-6'>
<div className='md:grid grid-cols-2'>
{
 items.map(item => <MenuItem key={item._id} item={item}>
 </MenuItem>)
}
</div>
<Link to={'/order/soup'}>
<button className=' text-center uppercase border-0 mx-auto  btn-outline border-b-4 btn w-1/4 '>ORDER YOUR FAVOURITE FOOD</button>
</Link>
</div>
    </div>
  );
};

export default Soups;