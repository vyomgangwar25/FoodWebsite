import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from './cartSlice'
import emptycartImg from "../Logo/empty-cart.png"
const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items
  )
  console.log(cartItems)


  const dispatch=useDispatch();
  const handleClearCart=()=>{
     dispatch(clearCart())
  }
  return (
    <div className='text-center m-4 p-4'>
    <h1 className='text-2xl font-bold'>cart</h1>
   <div className='w-6/12 m-auto'>
     <button className='p-2 m-2 bg-black text-white rounded-lg'
      onClick={handleClearCart}  >Clear Cart
      </button>
      {cartItems.length === 0 && <h1> Cart is Empty!! Add items to Cart <span className='w-full'><img src={emptycartImg} alt="" /></span></h1>}
    <ItemList items={cartItems}/>
   </div>
    </div>
  )
}

export default Cart
