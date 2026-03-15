import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SellCryptoState } from "../types";



const initialState: SellCryptoState = {
    value: null
}

export const SellCryptoOrderSlice = createSlice({
    name: "SellCryptoOrderSlice",
    initialState,
    reducers: {
        ADD_SELL_CRYPTO_ORDER: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        APPEND_TO_SELL_CRYPTO_ORDER: (state, action: PayloadAction<any>) => {
            const { value } = state;
            const newValue = { ...value, ...action.payload };
            state.value = newValue;
        },
        CLEAR_SELL_CRYPTO_ORDER: (state) => {
            state.value = null;
        }
    }
})

export const { ADD_SELL_CRYPTO_ORDER, APPEND_TO_SELL_CRYPTO_ORDER, CLEAR_SELL_CRYPTO_ORDER } = SellCryptoOrderSlice.actions;

export default SellCryptoOrderSlice.reducer;