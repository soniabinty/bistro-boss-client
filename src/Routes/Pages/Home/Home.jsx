import Banner from "./Banner";
import Call from "./Call";
import ItemOne from "./ItemOne";
import OrderMenu from './OrderMenu.jsx'
import PopularMenu from './PopularMenu.jsx'
import Feature from './Feature.jsx'
import Testimonial from "./Testimonial.jsx";
import Footer from "../../../Shared/Footer.jsx";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
   <OrderMenu></OrderMenu>
      <ItemOne></ItemOne>
     <PopularMenu></PopularMenu>
     <Call></Call>
   
     <Feature></Feature>
     <Testimonial></Testimonial>
     <Footer></Footer>
      
    </div>
  );
};

export default Home;