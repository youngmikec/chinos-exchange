import { configureStore } from "@reduxjs/toolkit";
import airtimeOrderReducer from './orders/airtime-order';
import buyCryptoReducer from './orders/buy-giftcard-order';
import ordersReducer from './orders/orders';


export const store = configureStore({
    reducer: {
        orderState: ordersReducer,
        AirtimeOrderSlice: airtimeOrderReducer,
        BuyGiftcardOrderSlice: buyCryptoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;