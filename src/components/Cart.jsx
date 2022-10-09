import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem'
import { deleteShoppingCart } from '../utils/fakeDB';
import { CartContext } from './Root';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  let totalPrice = 0;
  for (const product of cart){
    totalPrice = totalPrice + product.price * product.quantity;
  }




  const orderPlaced = ()=>{
   if(cart.length){
    setCart([]);
    deleteShoppingCart();
   return toast.success('Order placed successfully', {autoClose: 500})
   }
   toast.error('Cart is Empty!', {autoClose: 500})
  }



  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <h2 className='text-xl font-semibold'>
          {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>
        <ul className='flex flex-col divide-y divide-gray-700'>
      {
        cart.map( product => <CartItem 
          key={ product.id }
          product={product}
          />)
      }
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{totalPrice}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to='/shop'>
            <button
              type='button'
              className='back-to-shop-btn'
            >
              Back <span className='sr-only sm:not-sr-only'>to shop</span>
            </button>
          </Link>
          <button
          onClick={orderPlaced}
            type='button'
            className='place-order-btn'
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
