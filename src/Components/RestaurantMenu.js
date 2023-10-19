import React from 'react'
import {useState, useEffect } from 'react';
import ShimmerUI from './ShimmerUI';
import ResMenuCategory from './ResMenuCategory';

const RestaurantMenu = () => {
   const[resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu=async()=>{          //swiggy  menu API
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6438234&lng=77.3726379&restaurantId=49199&catalog_qa=undefined&submitAction=ENTER"
        );
        const json=await data.json();
        
       //console.log(json);
        setresInfo(json.data);
    };
    
    if(resInfo === null) return <ShimmerUI/>;

    const{name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;

    // const itemCard = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[1].itemCards;
     // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
;
       //console.log(categories);
  return  (
    <div className='menu text-center'>
    
     <h1 className='font-bold my-6 text-2xl'>{name}</h1>
     <p className='font-bold text-xl'>{cuisines.join(",")}-{costForTwoMessage}</p>
       {/*Category accordian */}
       {categories.map((category)=> {
       return <ResMenuCategory  data={category?.card?.card}/>
       })}
    </div>
  )
}

export default RestaurantMenu;
