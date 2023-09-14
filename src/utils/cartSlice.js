import { createSlice } from "@reduxjs/toolkit";


let id=0;
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    price:0
  },
  reducers: {
    addItem: (state, action) => {
     
     
      // if(id!==action.payload?.card?.info.id){
      //   state.items.push(action.payload);
      //   id=action.payload?.card?.info.id;
      //   console.log(id);
      // }
      state.items.push(action.payload);

    
    },
    removeItems: (state, action) => {
      if (state.items.length > 0) {
        state.items = state.items?.filter(
          (item) => {
            if(item?.card?.info.id === action.payload?.card?.info.id){
                state.price=state.price-((item?.card?.info.price)/100)
            }
           return item?.card?.info.id !== action.payload?.card?.info.id
          }
        );
       
        
      }
      

    },
    EmptyCart: (state) => {
      state.items = [];
      state.price=0;
    },

    SetPriceIncrement:(state,action)=>{
        if(action.payload>100){
            state.price +=(action.payload)/100
        }

        // { price>100 ? price/100: price
    
    },
    SetPriceDecrement:(state,action)=>{
      
        
        state.price -=(action.payload)/100
    }
  },
});

export const { addItem, removeItems, EmptyCart,SetPriceDecrement, SetPriceIncrement } = cartSlice.actions;
export default cartSlice.reducer;
{
  // above here while exporting  that  is reducer only not reducers , remember but in createSlice that is reducers
}
