import React from "react";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  
  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200 shadow-md">
      <img
        className="logo rounded-lg w-full"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
        alt={resData.info.name}
      />
      <div className="res-head">
        <h3 className="font-bold py-3 text-lg">{resData.info.name}</h3>
        <h4 className="truncate">{resData.info.cuisines}</h4>
        <h4>{resData.info.avgRating} star</h4>
        <h4>{resData.info.sla.deliveryTime} min</h4>
      </div>
    </div>
  );
};



//  export const withPromotedLabel=(RestaurantCard)=>{
//     return (props)=>{
//       return(
//          <div>
//             <label>Promoted</label>
//             <RestaurantCard {...props}/>
//          </div>
//       )
//     }
//  }

export default RestaurantCard;