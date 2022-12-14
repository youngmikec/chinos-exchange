import { configureStore } from "@reduxjs/toolkit";
import airtimeOrderReducer from './orders/airtime-order';
import buyCryptoReducer from './orders/buy-crypto-order';
import buyGiftcardReducer from "./orders/buy-giftcard-order";
import sellCryptoReducer from './orders/sell-crypto-order';

import ordersReducer from './orders/orders';


export const store = configureStore({
    reducer: {
        orderState: ordersReducer,
        AirtimeOrderSlice: airtimeOrderReducer,
        BuyGiftcardOrderSlice: buyGiftcardReducer,
        BuyCryptoOrderSlice: buyCryptoReducer,
        SellCryptoOrderSlice: sellCryptoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;