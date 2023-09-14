import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default store;



/**
 * STEPS
 * 
 * Create Store
 *  -configureStore()-RTK(reduxtoolkit)
 * 
 * provide my store to app
 * - <Provider store={store}> - import from react-redux
 * 
 * Slice
 * RTK - creatSlice({
 * name:"",
 * initialState:{
        
    },
    reducers:{
        addItem : (state , action)=>{state.xxx(action.payload)}
 * })
 *      export const {addItem,removeItem}=cartSlice.actions
        export default cartSlice.reducer

        Put that Slice into Store
        -{
            reducer: {
                cart: cartSlice,
                user:userSlice
            }
        }
 * 
 * 
 * 
 */
