import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from "../Components/cartSlice";


const appStore=configureStore({
    reducer:{
        cart:cartReducer
    }
}); //built store
export default appStore;