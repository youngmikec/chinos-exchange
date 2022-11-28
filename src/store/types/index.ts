import { AirtimeOrder, Order, BuyGiftcardOrder, SellGiftcardOrder } from "../../common"

export type AirtimeState = {
    value: AirtimeOrder | null
}

export type BuyGiftcardState = {
    value: BuyGiftcardOrder | null
}

export type SellGiftcardState = {
    value: SellGiftcardOrder | null
}

export type OrdersState = {
    value: Order[]
}