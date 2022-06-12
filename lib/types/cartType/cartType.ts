import { GET_CART } from "../../constants";

export type CartProduct = {
    id: string | null
    name: string | null
    price: string | null
    amount: string | null
    total: string | null
}

export type CartInitialState = {
    products: Array<CartProduct> | null
}

export type GetCartAc = {
    type: typeof GET_CART,
    products: Array<CartProduct> | null
}

export type ArrayCartRes = Array<CartProduct>;