export interface IMessages {
    [code:number]: string
}

export interface RequestError extends Error {
    status?: number,
    code?: number
}

export interface IUser {
    name: string,
    password: string,
    token: string,
    email: string,
    phone: string,
    passport: string,
    birthday: string,
    id? : number
}