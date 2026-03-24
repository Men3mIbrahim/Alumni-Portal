import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect, Children } from 'react';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Error from './Component/Error/Error';
import Programs from './Component/Programs/Programs';
import Students from './Component/Students/Students';
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes';




function App() {
  const routers = createBrowserRouter ([
    {path:'/',
      element:<Layout/> ,
      errorElement: <Error />,
      children:[

      {index:true ,element:<ProtectedRoutes><Home/></ProtectedRoutes> },
      {path:'programs' ,element:<ProtectedRoutes><Programs/></ProtectedRoutes> },
      {path:'students' ,element:<ProtectedRoutes><Students/></ProtectedRoutes> },
      {path:'register' ,element:<Register/>},
      {path:'login' ,element:<Login/>},

    ] }
    
  ])
  
  
  return <RouterProvider router={routers} />;
}

export default App;
