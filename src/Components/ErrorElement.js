import { useRouteError } from 'react-router-dom'
import React from 'react'
const ErrorElement = () => {
    const err=useRouteError();  //it give details of error as a object
    console.log(err);
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something went wrong</h2>
      <h3>{err.data}</h3>
    </div>
  )
}

export default ErrorElement
