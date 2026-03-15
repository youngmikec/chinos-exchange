import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuyCryptoState } from "../types";



const initialState: BuyCryptoState = {
    value: null
}

export const BuyCryptoOrderSlice = createSlice({
    name: "BuyCryptoOrderSlice",
    initialState,
    reducers: {
        ADD_BUY_CRYPTO_ORDER: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        APPEND_TO_BUY_CRYPTO_ORDER: (state, action: PayloadAction<any>) => {
            const { value } = state;
            const newValue = { ...value, ...action.payload };
            state.value = newValue;
        },
        CLEAR_BUY_CRYPTO_ORDER: (state) => {
            state.value = null;
        }
    }
})

export const { ADD_BUY_CRYPTO_ORDER, APPEND_TO_BUY_CRYPTO_ORDER, CLEAR_BUY_CRYPTO_ORDER } = BuyCryptoOrderSlice.actions;

export default BuyCryptoOrderSlice.reducer;