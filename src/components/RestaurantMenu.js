import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../customHooks/useRestaurant";
import {
  SetPriceDecrement,
  SetPriceIncrement,
  addItem,
  removeItems,
} from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
//params -parameters

const RestaurantMenu = () => {
  // hpw to read dynamic URL params
  const params = useParams();
  const { id } = params;
  // id becasue we wrote /restaurants/:id , id name is hardcoded we can keep anyhing param
  //but here also we shd use tha same
  // onfly const {id}=useParams
  const cartItems = useSelector((store) => store.cart.items);
  const [disableObj, setDisableObj] = useState({});

  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
    dispatch(SetPriceIncrement(item.card.info.price));

    {
      // on click on Add Items button , dispatch action(addItem) and "item" is payload
    }
  };
  const handleRemoveItems = (item) => {
    dispatch(removeItems(item));
    // dispatch(SetPriceDecrement(item.card.info.price))

    {
      // on click on remove Items button , dispatch action(addItem) and "item" is payload
    }
  };

  const restaurant = useRestaurant(id);

  const rstProfile = restaurant?.data?.cards[0]?.card?.card?.info;
  const rstMenu =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="rest-menu flex  gap-4">
      <div className="rest-details">
        <img
          className="rest-img w-64 h-72 rounded-sm m-1 p-1"
          src={IMG_CDN + rstProfile.cloudinaryImageId}
        />
        <div className="bg-orange-50 m-1 p-1 font-medium text-base">
          <h2> Restaurant: {rstProfile.name}</h2>
          <h4> Area: {rstProfile.areaName}</h4>
          <h4> City : {rstProfile.city}</h4>
          <h4>Avg Rating: {rstProfile.avgRating} </h4>
          <h3>Cost: {rstProfile.costForTwoMessage}</h3>
        </div>
      </div>
      <div className="menu m-4">
        <h3 className="font-semibold text-lg bg-green-100 m-1">Menu Items</h3>
        <ul>
          {rstMenu.map((items) => (
            <div className="flex rounded justify-between items-center bg-orange-50 m-1  ">
              <li
                className="   font-medium  px-1  "
                key={items?.card?.info?.id}
              >
                {items?.card?.info?.name}
              </li>
              <div>
                <button
                  className="m-1 text-white rounded p-1 bg-slate-500 disabled:opacity-[0.45]"
                  disabled={disableObj[items?.card?.info?.id] ?? false}
                  onClick={() => {
                    setDisableObj((prev) => ({
                      ...prev,
                      [items?.card?.info?.id]: true,
                    }));
                    handleAddItems(items);
                  }}
                >
                  Add
                </button>
                <button
                  className="m-1 text-white rounded p-1 bg-slate-500 disabled:opacity-[0.45]"
                  disabled={!disableObj[items?.card?.info?.id]}
                  onClick={() => {
                    setDisableObj((prev) => ({
                      ...prev,
                      [items?.card?.info?.id]: false,
                    }));
                    handleRemoveItems(items);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
