import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import PageNotFound from './Pages/PageNotFound/PageNotFound.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import './App.css'
import Warehouse from './Pages/Warehouse/Warehouse.jsx';
import Trucking from './Pages/Trucking/Trucking.jsx';
import CustomBrokerage from './Pages/CustomBrokerage/CustomBrokerage.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import WarehouseRoot from './Pages/Warehouse/WarehouseRoot.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'warehouse',
        element: <WarehouseRoot />,
        children: [
          {
            path: 'bonded-warehouse',
            element: <Warehouse />
          }
        ]
      },
      {
        path: 'trucking',
        element: <Trucking />
      },
      {
        path: 'custom-brokerage',
        element: <CustomBrokerage />
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
