import React from 'react';

const MenuItem = ({item}) => {
  const {name , image ,price , recipe} = item
  return (
 
    <div className=' flex mb-4 px-4 items-center gap-4'>
      <img style={{borderRadius: ' 0 200px 200px 250px'}} className='w-24 rounded-y-lg ' src={image} alt="" />
      <div>
        <h3 className='text-xl'>{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className='text-yellow-600 font-semibold'>${price}</p>
      
    </div>
  );
};

export default MenuItem;