import React, { Children, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// FIRST GO THROUGH FEW SCREENSHOTS in screenshot folder

import Header from "./components/Header"

import {Logo} from "./components/Header";
import About from "./components/About";
import { lazy } from "react";

import Body from "./components/Body"
import Footer from "./components/Footer"
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import ProfileClass from "./components/ProfileClass"
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


//RouterProvider provides appRouter to AppLayout

//---------------------------------------------------
/**
 * 
 * Chunking
 * Dynamic import
 * Code Splilting
 * Dynamic Bundling
 * Lazy Loading
 * On demand Loading
 * 
 * All the above words have same meaning: Bundlers(parcel in this case ) will bundle all components and 
 * finaly it goes as single js file , we can see it in Local Starage also , there will be single file index.js file
 * But when we are developing large scale apps like Make my trip etc , bundling multiple components into single 
 * becomes huggeee, So we do the above things so that code will be divided into multiple files.
 * Below lazy function gives that super power for us... 
 * here Instamart is just an another component taken for example purpose 
 * 
 *When we first click that instmart link, browser takes to that page , but it may
 not show anything because , this Instamrt script has to load first, but react
  fastly renders that compnent in meanwhile, and no code is there so react suspends(eact doesn't kow whether code is there or not)
   so we dont see anything or error msg occurs, once this Instamart  is loaded(which we can see in Local storage also,
     as second file next to intial index.js)
 * when we come back again to this page , it will then display its contents..Still this is SPA only.
  We can also see the instamrt comp file loaded in Local storage 
  So to avoid all this issue , we use another exported named func clled Suspense from react
 *  
  */ 

  const Instamart=lazy(()=> import("./components/Instamart") )

//-------------------------------------------------

const AppLayout = () => {
  const [dynamicUser, setDynamicUser]=useState({
    name : "Venkatesh Foods",
    email:"vb743@gmail.com" 
  })
 

  return (
    <Provider store={store}>
    <UserContext.Provider  value = {{
      user : dynamicUser,
      setState:setDynamicUser
    }
    }>
    {
      // by using UserContext.Provider , we can override the default value in UserContext like writing below way.
      //when ever the dynamicUser state variable chnages, user obj of UserContext also chnages and thereby 
      // values changes
      //here we are wrapping UserContext.Provider  under header, outlet, footer, but if we wrapper under 
      //header  and outlet then this dynamic chnages occur ony for those and footer will have default values of UserContext
    }
   
    
      <Header />
      {
       // Outlet comes here, with keeping header and footer intact if we want
       // to change middle content as per clicks that we make  use of Outlet 
      }

      <Outlet />
      {
        //all child elements will get into outlet as per tha path
      }
      <Footer />
    
    </UserContext.Provider>
    </Provider>
  );
};

//dynamic routing

const appRouter=createBrowserRouter([
  
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element : <Body dynamicUser={{
          name : "VB",
          Id : 743
        }}/>
      },
      {

        path: "/about", // here we can also write path : "about", / refers to root element
        element:<About/>,
        children :[
          {
            path : "profile",  // for /about/profile.   here we shdn't write  path : "/profile ", it will consider it as http://localhost:1234/profile
            element: <ProfileClass/>
          }
        ]
      },
      {

        path: "/contact",
        element:<Contact/>
      },
      {
        path : "/restaurants/:id",
        element: <RestaurantMenu/>
      },
      {
        path :"/instamart",
        element :
        <Suspense fallback={<h4> Instamart Loading.......</h4>}>
          <Instamart/>
          </Suspense>
      },
      {
        path :"/Cart",
        element :
        <Cart/>
      }
    ]
  },
  
])



const root = ReactDOM.createRoot(document.querySelector("#root"));

//passing reactElement in root
//if we want to pass functional component we pass like
//root.render(<FirstComponent/>)

root.render(<RouterProvider router= {appRouter} />);

/**
 *  PROPS DRILLING : passing data from parent to another components (children) like chaining 
 * 
 * * AppLayout
 * (state=user)
 *   - < Body user={user}/>
 *    - RestaurantCard user={user}
 *       - <h4>Owner: {user.name}</h4
 */
