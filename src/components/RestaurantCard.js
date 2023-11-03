import { IMG_CDN } from "../constants";

 const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRatingString, user}) => {
    return (
      <div className="card w-52 h-[350px]   bg-slate-100 shadow-lg p-2 m-2 rounded-md ">
        <img  className=" w-[210px] h-36"src={ IMG_CDN+ cloudinaryImageId}/>
        <h4 className="font-bold text-lg p-1"> {name}</h4>
        <h4 className="font-medium text-base p-1" >{cuisines.join(', ')}</h4>
        <h4 className="p-1">Average Rating : {avgRatingString}</h4>
        {/* <h4 className="p-1">Owner: {user.name}</h4> */}

      </div>
    );
  };

  export default RestaurantCard;