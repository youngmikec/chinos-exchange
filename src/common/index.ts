export * from './airtime';
export * from './enums';
export * from './order';
export * from './user';
export * from './giftcard';
export * from './cryptocurrency';




export type Step = {
    title: string;
    isActive: boolean;
}

export type ApiResponse = {
    success: boolean;
    message: string;
    payload: any;
}