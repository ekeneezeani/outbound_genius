import { useState } from "react";
import Login from "./pages/login/Login";

import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Inventory from "./pages/inventory/Inventory";
import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

function App() {

  const Layout = () =>{
    return(
      <div className="main">
        <Navbar/>
          <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>
            <div className="contentContainer">
              <Outlet/>
            </div>
          </div>
        <Footer/>
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
        },  {
          path: "/users",
          element: <Users />,
        },{
          path: "/inventory",
          element: <Inventory />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    }


  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
