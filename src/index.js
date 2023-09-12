import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,spm
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/inventory/Inventory';
import Login from './Components/Login/Login';
import CustomLoader from './Components/Custom Loader/CustomLoader';


const router= createBrowserRouter([


  {
    path:"/",
    element:<Home></Home>,
    children:[

      {
        path:"/",
        element:<Shop></Shop>
      },

      {
        path:"/orders",
        element: <Orders></Orders>,
         loader: CustomLoader
      },
      {
        path: "/inventory",
        element:<Inventory></Inventory>
      },
      {
        path:"/login",
        element:<Login></Login>
      }

    ]
  }



])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


