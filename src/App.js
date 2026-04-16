import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect, Children } from 'react';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import Register from './Component/Register/Register';
import Register2 from './Component/Register2/Register2';
import Login from './Component/Login/Login';
import Error from './Component/Error/Error';
import Programs from './Component/Programs/Programs';
import Students from './Component/Students/Students';
import ProtectedRoutes from './Component/ProtectedRoutes/ProtectedRoutes';
import CreateNewPassword from './Component/CreateNewPassword/CreateNewPassword';
import PasswordChanged from './Component/PasswordChanged/PasswordChanged';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import StudentDashboard from './Component/StudentDashboard/StudentDashboard';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';
import Otp from './Component/Otp/Otp';




function App() {
  const routers = createBrowserRouter ([
    {path:'/',
      element:<Layout/> ,
      errorElement: <Error />,
      children:[

      {index:true ,element:<Home/> },
      {path:'programs' ,element:<Programs/> },
      {path:'students' ,element:<Students/> },
      {path:'studentDashboard',element:<StudentDashboard/>},
      {path:'adminDashboard',element:<AdminDashboard/>},
      {path:'resetPassword',element:<ResetPassword/>},
      {path:'passwordChanged',element:<PasswordChanged/>},
      {path:'createNewPassword',element:<CreateNewPassword/>},
      {path:'resetPassword',element:<ResetPassword/>},
      {path:'otp',element:<Otp/>},
      {path:'register' ,element:<Register/>},
      {path:'register2' ,element:<Register2/>},
      {path:'login' ,element:<Login/>},

    ] }
    
  ])
  
  
  return <RouterProvider router={routers} />;
}

export default App;
