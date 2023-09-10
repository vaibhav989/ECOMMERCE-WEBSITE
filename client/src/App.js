import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home  from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import "./App.scss"
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/Products/:id",
        element: <Products />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router ={router} />
    </div>
  )
}

export default App