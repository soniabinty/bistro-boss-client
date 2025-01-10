import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Routes/Pages/Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Routes/Pages/Hooks/UseAxiosSecure';
import useCart from '../Routes/Pages/Hooks/useCart';




const Card = ({item}) => {
  const {price , name , image , recipe , _id} = item
const navigate = useNavigate()
const {user} = useAuth()
const location = useLocation()
const axiosSecure = useAxiosSecure()
const [, refetch] = useCart()
  const handleAddToCart = () =>{

    if(user && user.email){
  
const cartItem = {
  menuId : _id ,
  email : user.email ,
  name ,
  recipe ,
  price ,
  image
}

axiosSecure.post('/carts' , cartItem)
.then (res =>{
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} has been added to cart`,
      showConfirmButton: false,
      timer: 1500
    });

    refetch()
  }
})

    }

    else{

      Swal.fire({
        title: "You Are NOT logged In",
        text: "Please Log In First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login"
      }).then((result) => {
        if (result.isConfirmed) {
        navigate('/login' , {state : {from: location}})
        }
      });

    }

  }
  return (
    <div>
  
 
  <div className="card bg-base-100 max-w-96 shadow-xl">
  <figure className=" ">
    <img
      src={image}
      alt=""
      className="rounded-xl w-50" />
  </figure>
  <div className="card-body items-center text-center">
    <p className='bg-slate-900 text-white absolute right-4 top-4 p-2'>${price}</p>
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={ handleAddToCart} className="btn  bg-white text-yellow-600 border-0 border-b-4 border-yellow-600">ADD TO CART</button>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Card;