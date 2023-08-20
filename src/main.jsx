import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './component/Shop/Shop.jsx'
import Home from './component/Layout/Home.jsx'
import { Children } from 'react'
import Orders from './component/Orders/Orders.jsx'
import Inventory from './component/Inventory/Inventory.jsx'
import Login from './component/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    children:[
      {
        path:'/',
        element: <Shop />
      },
      {
        path: 'orders',
        element: <Orders/>
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path:'login',
        element: <Login></Login>
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
