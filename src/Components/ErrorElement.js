import { useRouteError } from 'react-router-dom'
import React from 'react'
import notfound from '../Logo/404-error.jpg'
const ErrorElement = () => {
    const err=useRouteError();  //it give details of error in a object
    //console.log(err);
  return (
    
    <div className='text-3xl font-bold text-center mt-10 pt-7'>
    <h1>Ooops!!!</h1>
    <h2>Something went wrong</h2>
    <h3>{err.data}</h3>
    <img src={notfound} className="w-full h-auto max-w-[300px] mx-auto" alt="" />
  </div>
  )
}

export default ErrorElement
