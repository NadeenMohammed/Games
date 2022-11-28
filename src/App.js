import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../src/component/MainLayout/MainLayout'
import Home from './component/Home/Home.jsx';
import Platform from './component/Plateform/Plateform';
import Pc from './component/Pc/Pc'
import Sortby from './component/Sort-by/Sort-by';
import Register from './component/Register/Register';
import Login from './component/Login/Login'


export default function App() {

  let routers = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
      {path:'Register',element:<Register/>},
      {path:"login",element:<Login/>},
      { index:true, element: <Home/> },
     
      { path: '/platform/:platform/', element: <Platform/> },
      {path:'pc',element:<Pc/>},
      { path: 'sort-by', element: <Sortby/> },

    ]
  }])

  return (<>
    <RouterProvider router={routers}></RouterProvider>
  </>);

}