import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../customHooks/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



// const authenicUser=()=>{
//   //API call to chekc Login aunthentication

//   return true;
// }

//SPA -Single page Application
// two types of Routing 1.Server Side routing and 2.Client side Routing
//We are doing Client side Routing

export const Logo = () => (

  <Link to="/" >
    <img
      class="h-28 rounded-full"
      alt="logo"
      src="https://i.pinimg.com/originals/3a/79/ee/3a79ee5106ead202550fa9116bde00c8.jpg"
    />
  </Link>
);

const Header = () => {
  const {user}=useContext(UserContext) 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const isOnline=useOnline()

const cartItems=useSelector(store=>store.cart.items)

  return (
    <div className="flex justify-between  mb-2 bg-slate-200 shadow-xl ">
      <Logo />
      <span className="mx-1 py-10">{isOnline ? '🟢' : '🔴'}</span>
      <h5 className="font-mono text-3xl text-amber-600 p-10 ">{user.name}</h5>

      
      <div className="nav-items ">
        <ul className="flex py-9 ">
        
          <Link to="/about">
            <li className="mx-2  ">About</li>
          </Link>
          {
            // we can also insert link  inside <li> </li> tag like child  HTML  no isses
          }

          {
            /* <a href='/about'>
            <li>About</li>
            </a> */
            // anchor tag makes whole page reload again o go that page
            // but writing Link which is provided by react router dom doesn't do that
          }

          <li className="mx-2">
          
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2">
          
            <Link to="/Instamart">Instamart</Link>
          </li>          
          
          <li className="mx-2">
            <Link to="/Cart "><div> Cart <i class="fa-solid fa-cart-shopping"> { cartItems.length}</i></div></Link></li>
          
        </ul>
        

        
      </div>
      
      {isLoggedIn ? (
        <button  className ="border font-medium  rounded-md  text-white bg-slate-700 p-1 h-11 m-2"onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button className ="border font-medium  rounded-md text-white  bg-slate-700 p-1 h-11 m-2" onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
     
    </div>
    
  );
};

export default Header;
