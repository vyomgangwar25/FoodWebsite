import React, { useState ,useEffect} from 'react'
import RestaurantCard from './RestaurantCard';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';
import UseOnlineStatus from '../Utils/UseOnlineStatus';
 

const Body = () => {
     //usestate hook
      const[resObj,setResObj]=useState([])
      const[searchText,setseachText]=useState("");
      const[filterdReasaurant,setfilterdRestraunt]=useState([]);
      useEffect(()=>{
        console.log("useeffect called")
        fetchData();
      },[]);
     
  
      const fetchData=async()=>{          //swiggy API
          const data=await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
          );
          const json=await data.json();
          console.log("api called")
          console.log(json);
          

          //optional chaining
          setResObj( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setfilterdRestraunt( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining
      }
       console.log(resObj)
      const onlineStatus=UseOnlineStatus();
   
      
      if(onlineStatus === false)
      {
         return(
           <h1>
             Looks like you are offline !! please check internet connection
           </h1>  
         )
       }

      
      //use shimmerUI(conditional rendering)
      if(resObj.length === 0)
      {
        return <ShimmerUI/>
      }
  return (  
      <div className='body bg-[#4c5262]'>
            
         <div className='filter flex '>

         <div className='search m-4 p-4'>
            <input type="text"
            className='border border-solid border-black '
            value={searchText} 
            onChange={(e)=>{
                   setseachText(e.target.value)
            }}
             />
            <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' 
               onClick={()=>{              //search button
                console.log(searchText);
          const filterdReasaurant= resObj.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                 );
                 
                setfilterdRestraunt(filterdReasaurant);
            }}
            >
            Search</button>
         </div>  
         <div className='search m-4 p-4 flex items-center'>
         <button className='filter-btn px-4 py-2  bg-gray-100 rounded-lg'
          onClick={()=>{
            const filterdList=resObj.filter(
              (res)=>{
                return res.info.avgRating > 4
                }
            )
            setfilterdRestraunt(filterdList);           //update the value
             
          }}>Top Rated Restaurants</button>
         </div>          
         
         </div>

        <div className="res-container flex flex-wrap">
        {filterdReasaurant.map((eachRestaurant) => (
          <Link to='/reastaurant/1' style={{ textDecoration:"none",color:"black"}}>
                 <RestaurantCard key={eachRestaurant.info.id} resData={eachRestaurant} /></Link>
        ))}
        </div>
      
      </div>
   
  )
}

export default Body;
