import { CryptoCurrency } from "./cryptocurrency";
import { GIFTCARD_STATUS, GIFTCARD_TYPE, ORDER_PAYMENT_METHOD, ORDER_STATUS } from "./enums";
import { User } from "./user";

export type Currency = {
    rate: number;
    name: string;
}

export type GiftCard = {
    id: string;
    name: string;
    code: string;
    rate: number;
    bankName: string;
    accountName: string;
    accountNumber: string;
    giftcardImage: string;
    type: GIFTCARD_TYPE;
    currencies: Currency[];
    status: GIFTCARD_STATUS;
    paymentDescription: string;
    paymentSteps: any[];
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}

export type  BuyGiftcardOrder = {
    id: string;
    sendersPhone: string;
    status: ORDER_STATUS,
    paymentMethod: ORDER_PAYMENT_METHOD,
    walletAddress: string;
    deleted: boolean,
    orderType: "GIFTCARD",
    cardType: "PHYSICAL" | "ECODE",
    cardNumber: string,
    amount: number,
    rate: number,
    amountReceivable: number,
    network: string,
    bankName: string,
    accountName: string,
    accountNumber: string,
    giftcard: GiftCard,
    cryptocurrency: CryptoCurrency,
    proofImage: string,
    createdBy: User,
    user: User,
    createdAt: Date,
    updatedAt: Date,
}

export type  SellGiftcardOrder = {
    id: string;
    sendersPhone: string;
    status: ORDER_STATUS,
    paymentMethod: ORDER_PAYMENT_METHOD,
    walletAddress: string,
    deleted: boolean,
    orderType: "GIFTCARD",
    cardType: "PHYSICAL" | "ECODE",
    cardNumber: string,
    rate: number,
    amount: number,
    amountReceivable: number,
    network: string,
    bankName: string,
    accountName: string,
    accountNumber: string,
    giftcard: GiftCard,
    proofImage: string,
    createdBy: User,
    user: User,
    createdAt: Date,
    updatedAt: Date,
}