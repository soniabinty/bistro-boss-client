import Banner from "./Banner";
import Call from "./Call";
import ItemOne from "./ItemOne";
import OrderMenu from './OrderMenu.jsx'
import PopularMenu from './PopularMenu.jsx'
import Feature from './Feature.jsx'
import Testimonial from "./Testimonial.jsx";

import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
<Helmet>
  <title> Bistro Boss Resturant | Home</title>
 
</Helmet>
      <Banner></Banner>
   <OrderMenu></OrderMenu>
      <ItemOne></ItemOne>
     <PopularMenu></PopularMenu>
     <Call></Call>
   
     <Feature></Feature>
     <Testimonial></Testimonial>
  
      
    </div>
  );
};

export default Home;