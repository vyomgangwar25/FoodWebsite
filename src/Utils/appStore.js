import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from "../Components/cartSlice";


const appStore=configureStore({    //configure the redux store.To do so we use configureStore()
    reducer:{
        cart:cartReducer        //slice:sliceName
    }
}); //built store
export default appStore;