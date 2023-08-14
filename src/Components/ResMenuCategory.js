import React, { useState } from 'react'
import ItemList from './ItemList';

const ResMenuCategory = ({data}) => {
    // const title=props;
    //console.log(title)
   // console.log(data);
   const[showItems ,setShowItems]=useState(false);
   const handleClick=()=>{
      console.log('click')
      setShowItems(!showItems);
   }
  return (
    <div>
      {/*Header*/}
      <div  className='w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4'>
      <div className=' flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg('>{data.title}({data.itemCards.length})</span><br />
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards}/>}
      
      </div>
     
      {/*Body */}
     
    </div>
  )
}

export default ResMenuCategory