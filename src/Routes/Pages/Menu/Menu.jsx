import React from 'react';
import { Helmet} from 'react-helmet-async';
import Banner from './Banner';
import OfferMenu from './OfferMenu';
import Desert from './Desert';
import Pizza from './Pizza';
import Salads from './Salads';
import Soups from './Soups';
const Menu = () => {
  return (
    <div>
      <Helmet>
    <title>Bistro Boss Resturant | Menu</title> 
      </Helmet>
      <Banner></Banner>
      <OfferMenu></OfferMenu>
      <Desert></Desert>
      <Pizza></Pizza>
      <Salads></Salads>
      <Soups></Soups>
      
    </div>
  );
};

export default Menu;