
import  { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../Hooks/UseMenu';

import OrderCard from './OrderCard';
import { useParams } from 'react-router-dom';
const TabMenu = () => {
  const categories = ['salad','pizza','soup','dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
console.log(category)
console.log(initialIndex)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu(0)

  const salads = menu.filter(item=> item.category === 'salad');
  const pizzas = menu.filter(item=> item.category === 'pizza');
  const soups = menu.filter(item=> item.category === 'soup');
  const desserts = menu.filter(item=> item.category === 'dessert');
  const drinks = menu.filter(item=> item.category === 'drinks');
  return (
    <div className='text-center mt-6'>
  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
   
  </TabList>
  <TabPanel>
   <OrderCard items={salads}></OrderCard>
  </TabPanel>
  <TabPanel>
 
  <OrderCard items={pizzas}></OrderCard>
  </TabPanel>
  <TabPanel>
  <OrderCard items={soups}></OrderCard>
  
  </TabPanel>
  <TabPanel>
  <OrderCard items={desserts}></OrderCard>
  </TabPanel>
  <TabPanel>
  <OrderCard items={drinks}></OrderCard>
  </TabPanel>

</Tabs>
    </div>
  );
};

export default TabMenu;