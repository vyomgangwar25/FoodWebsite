import React, { useState } from 'react'

const User = (props) => {
  const[count,setcount]=useState("0");
  const{name}=props;
  return (
    
    <div className='user'>
      <h2>Name:{name}</h2>
      <h2>count:{count}</h2>
      <h3>Location:Noida</h3>
      <h4>Contact:7355419073</h4>
    </div>
  )
}

export default User
