import React, { lazy, Suspense } from 'react'
import  ReactDOM  from 'react-dom'
import './index.css'
import Header from  "./Components/Header.js";
import Body from './Components/Body';
// import AboutUs from './Components/AboutUS';
import ContactUs from './Components/ContactUs';
import ErrorElement from './Components/ErrorElement';
import Cart from './Components/Cart';
import RestaurantMenu from './Components/RestaurantMenu';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';

 const AboutUs=lazy(()=>import('./Components/AboutUS'))

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
      //lazy loading
      {
        path:'/about',
        element:(
          <Suspense fallback={<h1>Loading....</h1>}> 
            <AboutUs/>
          </Suspense>
        )
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
