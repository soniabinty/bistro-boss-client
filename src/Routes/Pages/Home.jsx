import React from 'react';
import Banner from './Banner';
import OrderMenu from './OrderMenu';
import ItemOne from './ItemOne';

import PopularMenu from './PopularMenu';
import Call from './Call';
import Feature from './Feature';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OrderMenu></OrderMenu>
      <ItemOne></ItemOne>
     <PopularMenu></PopularMenu>
     <Call></Call>
     <Feature></Feature>
      
    </div>
  );
};

export default Home;