import React from 'react'
import {useState, useEffect } from 'react';
import ShimmerUI from './ShimmerUI';
import logo from '../Logo/download (1).png'

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
        
        console.log(json);
        setresInfo(json.data);
    };
    
    if(resInfo === null) return <ShimmerUI/>;
     const {itemCard} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards;
   
     
     console.log(itemCard+" hey")
 
  return  (
    <div className='menu'>
    <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
    <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")} - {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
     
    <h2>Menu</h2>
    <ul className='menu-list'>
        <li >{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[0].card.info.name}</li>
        <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[1].card.info.name}</li>   
        <li> {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[2].card.info.name}</li> 
        <li> {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[3].card.info.name}</li>
        <li> {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[4].card.info.name}</li> 
        <li> {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[5].card.info.name}</li> 
        <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[6].card.info.name}</li> 
        <li> {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.categories[0].itemCards[7].card.info.name}</li> 
    </ul>
      
    </div>
  )
}

export default RestaurantMenu;
