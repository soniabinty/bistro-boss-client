import React from 'react';
import useCart from '../../Routes/Pages/Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Routes/Pages/Hooks/UseAxiosSecure';

const Cart = () => {
  const [carts , refetch ] = useCart()
  const totalPrice = carts.reduce((total , item) => total+ item.price ,0)
const axiosSecure = useAxiosSecure()
  const handleDelete = id =>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
     
axiosSecure.delete(`/carts/${id}`)
.then(res=>{
if(res.data.deletedCount){

  refetch()
     Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
}
})
      }
    });

  }
  return (
    <div>


      <div className='flex justify-evenly'>
        <h2 className='text-4xl' >Total orders:{carts.length}</h2>
        <h2  className='text-4xl'>Total Prices:${totalPrice}</h2>
        <button className='btn'>Pay</button>
      </div>

      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
       #
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
      carts.map((item , idx) => <tr key={item._id}>
        <th>
        {idx+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
         
          </div>
        </td>
        <td>
         {item.name}
        </td>
        <td>${item.price}</td>
        <th>
          <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">
            <FaTrashAlt className='text-red-700'></FaTrashAlt>
          </button>
        </th>
      </tr> )
      }
     
     
 
    </tbody>
 
  </table>
</div>
      
    </div>
  );
};

export default Cart;