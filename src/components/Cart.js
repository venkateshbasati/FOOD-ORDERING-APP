import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartFoodItems from "./CartFoodItems";
import { EmptyCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems=useSelector((store)=> store.cart.items)
    const cartPrice=useSelector((store)=>store.cart.price)
    console.log(cartItems)
    {
        // here cart is subscribed to store.cart.items (to the specific). so when ever the cart slice updates the 
        //cart comp renders , we can also subscribe like useSelector((store)=> store) but here it is subscrbed to whole store , 
        // whenever the store gets updated and this cart comp renders
    }

    const dispatch=useDispatch()

    const clearCart=()=>{
        dispatch(EmptyCart())
    }

    
  
  return (
    <div >
        <div className="flex justify-between">
      <span className=" font-semibold flex items-center  rounded  bg-yellow-200  shadow-md  align-middle px-1 m-2 text-base ">Cart Items - {cartItems.length}</span>
      <span className=" font-semibold flex items-center  rounded  bg-blue-300  shadow-md  align-middle px-1 m-2 text-base ">Total Price: ₹ {cartPrice>=0? cartPrice:0   } </span>
      <button onClick={()=>clearCart()} className=" font-medium rounded shadow-md  bg-red-200 p-1 m-4 text-base ">Clear Cart</button> 
      </div>
      <div  className="flex flex-wrap">
     {cartItems.map((foodItem)=> <CartFoodItems  {... foodItem.card.info}/>)}
     </div>
      
    </div>
  );
}
  

export default Cart;
