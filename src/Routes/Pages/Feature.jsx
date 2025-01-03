import React from 'react';
import img from '../../assets/home/featured.jpg'
import Heading from '../../Shared/Heading';
const Feature = () => {
  return (
    <div
    className="hero min-h-screen  text-white bg-fixed"
    style={{
    
      backgroundImage: `url('${img}')`,
    }}>
 <div className='z-10 bg-opacity-60  bg-black w-full h-full mx-auto pt-12'>
 <Heading
  subHeading={'check it out '}
  heading ={'from our menu'}></Heading>
  <div className="flex justify-between px-[120px] gap-9 pt-8">
   <img className='w-[420px]' src={img} alt="" />
   <div className='flex flex-col justify-center'>
   <h6 className="mb-5 text-xl font-bold">From March,2024</h6>
   <h6 className="mb-5 text-xl uppercase">Where can i get some</h6>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className=' uppercase border-0  btn-outline border-b-4 btn w-1/4 text-white'>order now</button>
   </div>
  
   
      </div>
 </div>
</div>
  
  );
};

export default Feature;