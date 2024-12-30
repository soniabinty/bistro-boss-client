import React from 'react';

const Heading = ({heading , subHeading}) => {
  return (
    <div className='my-12 text-center w-3/12 mx-auto'>

      <p className='text-yellow-600 border-b-4 '>---{subHeading}---</p>
      <h3 className='font-bold text-3xl border-b-4 uppercase py-3'>{heading}</h3>
      
    </div>
  );
};

export default Heading;