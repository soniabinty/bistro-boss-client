import React from 'react';
import Card from '../../../Shared/Card';

const OrderCard = ({items}) => {
  return (
    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
    {
        items.map((item) => <Card key={item._id} item ={item}></Card>)
      }
     </div>
  );
};

export default OrderCard;