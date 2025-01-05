import React from 'react';


const Card = ({item}) => {
  const {price , name , image , recipe} = item
  return (
    <div>
  
 
  <div className="card bg-base-100 max-w-96 shadow-xl">
  <figure className=" ">
    <img
      src={image}
      alt=""
      className="rounded-xl w-50" />
  </figure>
  <div className="card-body items-center text-center">
    <p className='bg-slate-900 text-white absolute right-4 top-4 p-2'>${price}</p>
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn  bg-white text-yellow-600 border-0 border-b-4 border-yellow-600">ADD TO CART</button>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Card;