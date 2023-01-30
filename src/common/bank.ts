import { User } from "./user";

export type Bank = {
  id: string;
  name: string;
  sortCode: string;
  bankCode: string;
  shortName: string;
  country: string;
  website: string;
  createdBy: User;
  updatedBy: User;
  erp: number;
};
