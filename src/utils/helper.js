

export function filterRestaurants(searchText,restaurants){
  
    const filteredData= restaurants.filter((rst)=> 
    
    rst?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      
    )
  
    return filteredData;
  }