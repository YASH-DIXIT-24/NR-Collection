import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/ErrorCustom";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState,useEffect } from "react";
import UserContext from "./utils/UserContext";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import useOnlineStatus from "./hooks/useOnlineStatus";

const Grocery=lazy(()=>import('./components/Grocery'))
const AppLayout= ()=>{
    const [userName,setUserName]=useState("Yash");
    const onlineStatus = useOnlineStatus();
    console.log("use online",onlineStatus)
    if(!onlineStatus){
        return(
        <div class="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div class="flex flex-col items-center space-y-4 px-8 py-6 bg-white rounded-md shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.97 4.91a1 1 0 010-1.414V4h4a1 1 0 010 2h-4zM4.97 5.03a1 1 0 00-1.414-1.414V4h4a1 1 0 000 2h-4zM11.97 15.09a1 1 0 010-1.414V16h4a1 1 0 010 2h-4zM4.97 14.97a1 1 0 00-1.414 1.414V16h4a1 1 0 000-2h-4zM9.5 10a1 1 0 11-2 0 1 1 0 2z" clip-rule="evenodd" />
              </svg>
              <h2 class="text-xl font-medium text-gray-800">
                Oops! Looks like you're offline.
              </h2>
              <p class="text-base text-gray-600">
                Please check your internet connection and try again.
              </p>
              <button class="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Retry
              </button>
            </div>
        </div>
        )
    }
    useEffect(()=>{
        setUserName("Yash")
    },[])
    return(
        <Provider  store={appStore}>
            <UserContext.Provider value={{userName,setUserName}}>
                    <div className='app'>
                        <Header/>
                        <Outlet/>
                        <Footer/>
                    </div>
            </UserContext.Provider>
        </Provider>
    )
}
const appRouter =createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
            path:"/grocery",
            element:<Grocery/>
        },
        {
            path:"/",
            element:<Body/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'restaurantMenu/:resId',
            element:<RestaurantMenu/>
        },
        {
            path:'cart',
            element:<Cart/>
        }
      ],
      errorElement:<ErrorCustom/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

