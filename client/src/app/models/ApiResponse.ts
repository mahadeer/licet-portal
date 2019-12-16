export class ApiResponse<T> {
    data: T;
    status: boolean;
    message: string;
    code: number;
}

export interface IServiceResponse {
    status: boolean;
    message: string;
}