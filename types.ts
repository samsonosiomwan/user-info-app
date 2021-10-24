export interface IAddress {
    street: string
    city:string
    state:string
    country:string
    getAddress():string
}

export interface IUserData {

    firstName:string
    lastName:string
    email:string
    password:string | number
    getUserData(): string
}

