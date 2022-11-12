export type Step = {
    name: string;
    isActive: boolean;
}

export type ApiResponse = {
    success: boolean;
    message: string;
    payload: any;
}