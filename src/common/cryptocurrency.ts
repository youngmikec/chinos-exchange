import { AIRTIME_STATUS, ORDER_PAYMENT_METHOD, ORDER_STATUS } from "./enums";
import { User } from "./user";

export type Network = {
  networkName: string;
  networkId: string;
};

export type CryptoCurrency = {
  id: string;
  name: string;
  shortName: string;
  walletAddress: string;
  exchangePlatform: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  code: string;
  rate: number;
  cryptoImage: string;
  barcode: string;
  networks: Network[];
  status: AIRTIME_STATUS;
  paymentDescription: string;
  paymentSteps: any[];
  createdBy: User;
  createdAt: Date;
  updatedBy: User;
  updatedAt: Date;
  deleted: boolean;
  deletedAt: Date;
  deletedBy: User;
};

export type BuyCryptoOrder = {
  id: string;
  cryptoName: string;
  sendersPhone: string;
  status: ORDER_STATUS;
  paymentMethod: ORDER_PAYMENT_METHOD;
  walletAddress: string;
  deleted: boolean;
  orderType: "BUY_CRYPTO";
  cardNumber: string;
  amount: number;
  rate: number;
  amountReceivable: number;
  network: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  cryptocurrency: CryptoCurrency;
  proofImage: string;
  createdBy: User;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};

export type SellCryptoOrder = {
  id: string;
  sendersPhone: string;
  status: ORDER_STATUS;
  paymentMethod: ORDER_PAYMENT_METHOD;
  walletAddress: string;
  deleted: boolean;
  orderType: "SELL_CRYPTO";
  cardNumber: string;
  amount: number;
  rate: number;
  amountReceivable: number;
  network: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  cryptocurrency: CryptoCurrency;
  proofImage: string;
  createdBy: User;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};
