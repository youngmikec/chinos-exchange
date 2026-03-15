import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AirtimeState } from "../types";



const initialState: AirtimeState = {
    value: null
}

export const AirtOrderSlice = createSlice({
    name: "AirtimeOrderSlice",
    initialState,
    reducers: {
        ADD_AIRTIME_ORDER: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        APPEND_TO_AIRTIME_ORDER: (state, action: PayloadAction<any>) => {
            const { value } = state;
            const newValue = { ...value, ...action.payload };
            state.value = newValue;
        },
        CLEAR_AIRTIME_ORDER: (state) => {
            state.value = null;
        }
    }
})

export const { ADD_AIRTIME_ORDER, APPEND_TO_AIRTIME_ORDER, CLEAR_AIRTIME_ORDER } = AirtOrderSlice.actions;

export default AirtOrderSlice.reducer;