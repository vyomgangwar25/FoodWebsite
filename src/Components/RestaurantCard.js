import React from "react"
const RestaurantCard=(props)=>{
  console.log(props)
  const { resData } = props 
  return(
    <div className='res-card'>
    <img
          src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
          + resData.info.cloudinaryImageId
    }
     className="logo"
      />
      <h3>{resData.info.name}</h3>
      <h4 className='fix'>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRating}star</h4>
      <h4>{resData.info.sla.deliveryTime}min</h4>
    </div>
  )
}
export default RestaurantCard;
