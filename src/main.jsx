import React from 'react'
import ReactDOM from 'react-dom/client'
import { Children } from 'react'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './component/Shop/Shop.jsx'
import Home from './component/Layout/Home.jsx'

import Orders from './component/Orders/Orders.jsx'
import Inventory from './component/Inventory/Inventory.jsx'
import Login from './component/Login/Login.jsx'
import CartProductsLoader from './Loaders/CartProductsLoader.js'
import CheckOut from './component/CheckOut/CheckOut'
import SignUp from './component/SignUp/SignUp'
import AuthProvider from './component/providers/AuthProvider'
import PrivateRoute from './routes/PrivateRoute'

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
        element: <Orders/>,
        loader: CartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivateRoute><Inventory /></PrivateRoute>
      },
      {
        path:'checkout',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
