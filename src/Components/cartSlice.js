import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({     //create slice
      name:'cart',               //name:newSlice
      initialState:{
        items:[]
      },
      reducers:{
        addItem:(state,action)=>{
           state.items.push(action.payload);
        },
        removeItem:(state)=>{
          state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
      }
});
export const{addItem,removeItem,clearCart}=cartSlice.actions;   //export the actions
export default cartSlice.reducer;      //export the slice  and now we need to configure the store