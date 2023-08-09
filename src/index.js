import React from 'react'
import  ReactDOM  from 'react-dom'
import './index.css'
import Header from  "./Components/Header.js";
import Body from './Components/Body';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import ErrorElement from './Components/ErrorElement';
import Cart from './Components/Cart';
import RestaurantMenu from './Components/RestaurantMenu';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';

 

const AppLayout=()=>{
  return(
    <div className='app'>
        <Header/>
        <Outlet/>
    </div>
  
  );
}
const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element: <Body/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/contact',
        element:<ContactUs/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path:'/reastaurant/:resId',
        element:<RestaurantMenu/>
      },
      
    ],
    errorElement:<ErrorElement/>
  },
 
  ]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}/>);
