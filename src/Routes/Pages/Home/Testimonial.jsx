import React, { useEffect, useState } from 'react';
import Heading from '../../../Shared/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating'
import icon from '../../../assets/icon/quote.png'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews , setReviews] = useState([])
    useEffect(() =>{
      fetch('/review.json')
      .then(res => res.json())
      .then (data => 
       
        setReviews(data)
       
      
      
      )
    }, [])
  return (
    <div>
         <Heading
  subHeading={'What our clients say'}
  heading ={'testimonitals'}></Heading>
     <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {
          reviews.map(review =>
               <SwiperSlide
               key={review._id}>
               <div className='w-8/12 mx-auto text-center space-y-4 mb-12'>
             <img className='w-12 mx-auto' src={icon} alt="" />
             
               <Rating className='mx-auto'
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <p className='text-lg'>{review.details}</p>
                <h3 className='text-xl text-yellow-600'>{review.name}</h3>
               </div>
               </SwiperSlide> 
          )
        }
    
    
      </Swiper>
      
    </div>
  );
};

export default Testimonial;