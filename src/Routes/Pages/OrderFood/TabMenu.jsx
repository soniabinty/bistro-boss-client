
import  { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../Hooks/UseMenu';
import Card from '../../../Shared/Card';
import OrderCard from './OrderCard';
const TabMenu = () => {
  const [tabIndex, setTabIndex] = useState(0);
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