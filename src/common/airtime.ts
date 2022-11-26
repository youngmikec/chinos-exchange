import { User } from "./user";

export  type Airtime = {
    id: string;
    _id: string;
    code: string;
    name: string;
    shortName: string;
    rate: number;
    networkImage: string;
    status: string;
    paymentSteps: any[];
    txnNetwork: string;
    txnNetworkNumber: string;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
}