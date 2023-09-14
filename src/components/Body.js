import { useContext, useEffect, useState } from "react";
import  RestaurantCard  from "./RestaurantCard.js";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import {filterRestaurants} from "../utils/helper.js"
import useOnline from "../customHooks/useOnline.js";
import UserContext from "../utils/UserContext.js";




//-----
const bgcolor={
  backgroundColor:"blue"
}
//this bgcolor thing is  css style object and  is used as inline style css
//  as this is a JS obj , we write like in any of the tags, style={bgcolor}  or
//  style={{ backgroundColor:"blue"}} , but writing in separate css file  is recommended
// as it can be reusable and maintable

//---------------

const Body = ({dynamicUser}) => {
  
  const [allRestaurants,setAllRestaurants]=useState([])
  const [filteredRestaurants,setFilteredRestaurants]=useState([])
   
  const [searchText, setSearchText] = useState("");
  const {user, setState }=useContext(UserContext)
  
   useEffect(()=>{
    //API call
    getRestaurants();
   },[])
   // if we dont pass any dependency into useEffect() i.e...
   //useEffect(()=>{   
    // getRestaurants();
  // },)
  //then useEffect will be called after evry render


  async function getRestaurants(){

    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsonData= await data.json()
    console.log(jsonData)
    //optional chaining
    //read about shimmer effect UI

    setAllRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   
    
  
  }

  const isOnline=useOnline()

  if(!isOnline){
    return (
    <h3> OOPS!! Your are Offline. Please Check Your Internet Connection </h3>
    )
  }

  console.log('render')

  // not render component (early return)
    if(!allRestaurants) 
      return null;

  // if(filteredRestaurants?.length===0){
  //   return <h2>No restaurant matches your search</h2>
  // }

 

  return (allRestaurants?.length===0)?(<Shimmer/>): (

    //conditional rendering
    // if restaurant is empty ==> shimmer UI
    // if restaruant has  data ==> actual data UI

    <>
      <div className="search-container  inline-block  rounded-md  bg-orange-200 shadow-lg my-2 py-1 px-2">    
        <input  className="rounded-md text-center"
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            //  setRestaurants(restaurantList)
            setSearchText(e.target.value)
          }}
        />
        
        <button className="search-btn m-1 px-2 rounded-md  shadow-md bg-slate-700 text-white"  onClick={ ()=>{
          //need to filter restaurants
          const filteredrest=filterRestaurants(searchText, allRestaurants)
          
          //update the state- restaurants
           setFilteredRestaurants(filteredrest)
        }         
        }> Search </button>

        {/* <input  placeholder ="test input " className ="ml-1 text-center rounded-md"value={user.name} onChange={(e)=>
        setState({
          ...user,
          name: e.target.value,
          
        })} ></input> */}
      </div>

      <div className="restaurant-list flex flex-wrap">
      
        {filteredRestaurants.map((restaurant) => {
          return  (
            <Link to={"/restaurants/"+ restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info} user={dynamicUser}  />
            </Link>
          );
        })}
        
      </div>
    </>
  );
};

export default Body;
