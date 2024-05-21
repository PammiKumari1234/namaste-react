import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {clearCart,removeItem} from "../utils/cartSlice";

const Cart = () => {
    const cartItems= useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length === 0 ?"":<button className='font-bold px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 m-4 rounded-lg transform hover:scale-110 transition duration-300' onClick={handleClearCart}>Clear</button>}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center justify-between pb-6 border border-solid border-black w-full m-5 px-5 py-4 rounded-lg bg-gradient-to-r from-red-100 to-yellow-100 font-bold">
              <span>{item.name} - {item.price}</span>
              <button
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => handleRemove(item)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
