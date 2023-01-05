import { AIRTIME_STATUS } from "./enums";
import { User } from "./user";

export type Network = {
    networkName: string;
    networkId: string;
}

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
    networks: Network[]
    status: AIRTIME_STATUS,
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
