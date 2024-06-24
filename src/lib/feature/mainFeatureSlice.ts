import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "phi/types/product_type";

export interface MainStore {
    product:Product[]
}

const initialState: MainStore = {
   product: []
};

const mainStoreSlice = createSlice({
    name: "main_store_state",
    initialState,
    reducers: {
      get_products_fun: (state,action: PayloadAction<Product[]>) => {
        state.product = action.payload;
      }
    },
});

export const {
    get_products_fun,
} = mainStoreSlice.actions;
export default mainStoreSlice.reducer;
