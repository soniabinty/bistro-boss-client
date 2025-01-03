import React from 'react';
import Heading from '../../../Shared/Heading';

const Card = () => {
  return (
    <div>
       <Heading
  subHeading={'check it out '}
  heading ={'from our menu'}></Heading>
  <div className='md:grid grid-cols-3'>
  <div className="card bg-base-100 w-96 shadow-xl">
  <figure className=" ">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>
      
    </div>
  );
};

export default Card;