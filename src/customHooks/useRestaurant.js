import {useState,useEffect} from "react"

const useRestaurant=(id)=>{
    const [restaurant, setRestaurant] = useState();

    
    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.2472528&lng=80.1514447&restaurantId=" +
          id +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const restdata = await data.json();
      console.log(restdata);
      setRestaurant(restdata);
    }
    return restaurant

}

export default useRestaurant;