import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Footer from "./components/Footer";
import {Provider} from "react-redux";
import appStore from "./utils/appStore"
import Cart from "./components/Cart";
// import {favicon} from "../"

const AppLayout = () =>{
    
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/About",
                element: <About/>
            },
            {
                path:"/Contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestrauntMenu/>
            },
            {
                path:"/Cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)