import React from 'react';

const Cover = ({img , heading , subHeading}) => {
  return (
    <div>
        <div
          className="h-[580px]  "
          style={{
            backgroundImage: `url('${img}')`,
            backgroundPosition:Cover,
          }}>
          <div className="hero-overlay "></div>
          <div className="hero-content bg-black bg-opacity-50  text-center w-9/12 mx-auto  -mt-[340px]">
            <div className="max-w-md py-8 text-white ">
              <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
              <p className="mb-5">
               {subHeading}
              </p>
              
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Cover;