import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuyGiftcardState } from "../types";



const initialState: BuyGiftcardState = {
    value: null
}

export const BuyGiftcardOrderSlice = createSlice({
    name: "BuyGiftcardOrderSlice",
    initialState,
    reducers: {
        ADD_BUY_GIFTCARD_ORDER: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        APPEND_TO_BUY_GIFTCARD_ORDER: (state, action: PayloadAction<any>) => {
            const { value } = state;
            const newValue = { ...value, ...action.payload };
            state.value = newValue;
        },
        CLEAR_BUY_GIFTCARD_ORDER: (state) => {
            state.value = null;
        }
    }
})

export const { ADD_BUY_GIFTCARD_ORDER, APPEND_TO_BUY_GIFTCARD_ORDER, CLEAR_BUY_GIFTCARD_ORDER } = BuyGiftcardOrderSlice.actions;

export default BuyGiftcardOrderSlice.reducer;