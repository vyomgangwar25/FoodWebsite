import React, { useState ,useEffect} from 'react'
import RestaurantCard from './RestaurantCard';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';

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
          setResObj( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setfilterdRestraunt( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining
      }
                                                  //use shimmerUI(conditional rendering)
      if(resObj.length === 0)
      {
        return <ShimmerUI/>
      }
  return (  
      <div className='body'>
            
         <div className='filter'>

         <div className='search'>
            <input type="text"
            className='search-box'
            value={searchText} 
            onChange={(e)=>{
                   setseachText(e.target.value)
            }}
             />
            <button onClick={()=>{              //search button
                console.log(searchText);
          const filterdReasaurant= resObj.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                 );
                 
                setfilterdRestraunt(filterdReasaurant);
            }}
            >
            Search</button>
         </div>            
          <button className='filter-btn'
          onClick={()=>{
            const filterdList=resObj.filter(
              (res)=>{
                return res.info.avgRating > 4
                }
            )
            setfilterdRestraunt(filterdList);           //update the value
             
          }}>Top Rated Restaurants</button>
         </div>

        <div className="res-container">
        {filterdReasaurant.map((eachRestaurant) => (
          <Link to='/reastaurant/1'><RestaurantCard key={eachRestaurant.info.id} resData={eachRestaurant} /></Link>
        ))}
        </div>
      </div>
    
  )
}

export default Body;
