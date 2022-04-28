import { GET_LOGIN, LOG_OUT, ADD_PRODUCTS } from "./constants"

//types for API routes
export type Order = {
    customer: string
    product: string
    amount: number
    price: number
    status: string
    date: string
    total: string
}

export type Product = {
    id: number
    name: string 
    price: string
    status: string
    imgSrc: string
}

export type User = {
    userName: string
    userId: string
}

export type Notes = {
    text: string
    date: string
}

//Login reducer types
export type LoginInitialState = {
    userName: string | null
    userId: string | null
}

export type GetLoginAcPayload = {
    userId: string
    userName: string
}

export type LoginFormData = {
    login: string | null
    password: string | null
}

export type GetLoginAc = {
    type: typeof GET_LOGIN
    user: GetLoginAcPayload
}

export type LogOutAc = {
    type: typeof LOG_OUT
}

//Get local data
export type GetLocalDataUser = {
    login: string | null
    id: string | null
}

//products types
export type InitialProduct = {
    imgSrc: string | null
    title: string | null
    price: string | null
    amount: string | null
    id: string | null
    status: boolean,
}

export type ProductInitialState = {
    products: Array<InitialProduct> | null
};

export type AddProductsAc = {
    type: typeof ADD_PRODUCTS
    products: Array<InitialProduct> | null
}

export type ArrayProductsRes = Array<InitialProduct>;