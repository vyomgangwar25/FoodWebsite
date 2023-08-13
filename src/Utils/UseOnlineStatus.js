//custom hook
import  { useEffect, useState } from 'react'

const UseOnlineStatus = () => {
    const[OnlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
       window.addEventListener('offline',()=>{
        setOnlineStatus(false);
       });
       window.addEventListener('onlne',()=>{
        setOnlineStatus(true);
       })
    },[]);
    
  return   OnlineStatus;
}

export default UseOnlineStatus
