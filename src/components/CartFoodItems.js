import { useDispatch } from "react-redux";
import { IMG_CDN } from "../constants";
import { SetPriceDecrement, SetPriceIncrement } from "../utils/cartSlice";
import { useState } from "react";

const CartFoodItems = ({ name, imageId, description, price }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const priceCountIncrease = (price) => {
    setCount(() => count + 1);
    dispatch(SetPriceIncrement(price));
    // dispatch(addItem(1))
  };

  const priceCountDecrease = (price) => {
    setCount(() => (count == 0 ? count : count - 1));

    dispatch(SetPriceDecrement(price));
    // dispatch(addItem(1))
  };

  return (
    <div className="card w-52  bg-slate-100 relative shadow-md p-2 m-2   rounded-md ">
      <img className=" w-[210px] h-36" src={IMG_CDN + imageId} />
      <h4 className="font-semibold text-lg p-1"> {name}</h4>
      <h4 className="font-normal p-1 "> {description}</h4>
      <h4 className="font-medium p-1   ">
        Rupees : {price > 100 ? price / 100 : price}
      </h4>

      <div className="flex absolute bg-slate-500  px-1 rounded-sm  items-center  w-20 gap-1 justify-center right-1 bottom-1">
        <button type="button"
          className="bg-red-300 mx-2 w-12 rounded-sm disabled:opacity-[0.45] "disabled={count===0 ?? false}
          onClick={() => priceCountDecrease(price)}
        >
          <i class="fa fa-minus p-1 " aria-hidden="true"></i>
        </button>

        <div className=" font-semibold  text-white text-lg  ">{count}</div>

        <button
          className="bg-green-400 mx-2 w-12 rounded-sm " 
          onClick={() => priceCountIncrease(price)}
        >
          
          <i class="fa fa-plus p-1" aria-hidden="true"></i>
        </button>
      </div>
      {/* <h4>Owner: {user.name}</h4> */}
    </div>
  );
};

export default CartFoodItems;
