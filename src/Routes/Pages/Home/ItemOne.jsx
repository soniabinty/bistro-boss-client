import React from 'react';
import img from '../../../assets/home/chef-service.jpg'
const ItemOne = () => {
  return (
    <div
    className="h-[480px] my-6 "
    style={{
      backgroundImage: `url('${img}')`,
    }}>
    <div className="hero-overlay "></div>
    <div className="hero-content text-neutral-content text-center w-9/12 mx-auto  -mt-[340px] bg-white">
      <div className="max-w-md py-8 text-black ">
        <h1 className="mb-5 text-5xl font-bold uppercase">bistro boss</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        
      </div>
    </div>
  </div>
  );
};

export default ItemOne;