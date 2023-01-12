import { User } from "./user";

export type Mail = {
    fullName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    createdBy: User;
    createdAt: Date;
    updatedBy: User;
    updatedAt: Date;
    deleted: boolean;
    deletedAt: Date;
    deletedBy: User;
}