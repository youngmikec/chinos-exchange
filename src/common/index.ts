export * from './airtime';
export * from './enums';
export * from './order';
export * from './user';
export * from './cryptocurrency';




export type Step = {
    name: string;
    isActive: boolean;
}

export type ApiResponse = {
    success: boolean;
    message: string;
    payload: any;
}