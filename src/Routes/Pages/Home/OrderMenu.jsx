
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// import required modules
import {  Pagination } from 'swiper/modules';
import Heading from '../../../Shared/Heading';

export default function App() {
  return (
 <section>
   <Heading
  subHeading={'From 11:00 am to 10:00 pm '}
  heading ={'order now'}></Heading>
    <Swiper
         slidesPerView={4}
         spaceBetween={30}
         centeredSlides={true}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper"
      >
             <SwiperSlide><img  src={slide1} alt="" />
             <h3 className='text-3xl text-white font-bold -mt-16 mx-auto text-center uppercase'>salads</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-3xl text-white font-bold -mt-16 mx-auto text-center uppercase'>pizzas</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-3xl text-white font-bold -mt-16 mx-auto text-center uppercase'>soups</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        
        <h3 className='text-3xl text-white font-bold -mt-16 mx-auto text-center uppercase'>desserts</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h3 className='text-3xl text-white font-bold   mx-auto text-center uppercase'>salads</h3></SwiperSlide>
      </Swiper>
 </section>

  );
}
