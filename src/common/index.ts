export * from './airtime';
export * from './enums';
export * from './user';





export type Step = {
    name: string;
    isActive: boolean;
}

export type ApiResponse = {
    success: boolean;
    message: string;
    payload: any;
}