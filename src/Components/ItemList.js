import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './cartSlice';
const ItemList = ({items}) => {
    
 // console.log(items)
  //  console.log(items?.card[0]?.info?.name)

  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
   //dispatch an action
   dispatch(addItem(item))
  }
 
  return (
    <div>
 
       {items.map(item =>
        <div key={item.card.info.id}
          className='p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between'> 
        

          <div className='w-9/12'>
            <div className='py-2'>
             <span>{item.card.info.name}</span>
             <span> - ₹{item.card.info.price/100||item.card.info.defaultPrice/100}</span>
            </div>
          <p className='text-xs'>{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
               <div className='absolute'>
                 <button className='p-2 mx-16 rounded-lg bg-black text-white
                 shadow-lg' onClick={()=>handleAddItem(item)}>Add +</button>
                 </div>
                 <img   src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                 className='w-full' />
                     
         </div>
        </div>
        )}
        
    </div>
  )
}

export default ItemList
