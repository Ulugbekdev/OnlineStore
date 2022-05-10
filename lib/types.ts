import { GET_LOGIN, LOG_OUT, ADD_PRODUCTS, ADD_NOTES, ADD_ORDERS, GET_CART } from "./constants"

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

//Product with query id types
export type InitialProductId = {
    status: boolean
    id: string | null
    name: string | null
    price: string | null
    imgSrc: string | null
}

export type ProductIdInitialState = InitialProductId;

//notes types
export type InitialNotes = {
    text: string
    date: string
}

export type NotesInitialState = {
    notes: Array<InitialNotes> | null
};

export type AddNotesAc = {
    type: typeof ADD_NOTES
    notes: Array<InitialNotes>
}

export type GetNotes = string | null;

export type NotesFormData = {
    id: string | null
    date: string | null
    text: string | null
}

//order types
export type InitialOrder = {
    customer: string | null
    title: string | null
}

export type OrderInitialState = {
    orders: Array<InitialOrder> | null
};

export type AddOrdersAc = {
    type: typeof ADD_ORDERS
    orders: Array<InitialOrder> | null
}

export type ArrayOrdersRes = Array<InitialOrder>;

//Cart types
export type InitialCart = {
    name: string | null
    price: string | null
    amount: string | null
    total: string | null
}

export type CartInitialState = {
    products: Array<InitialCart> | null
}

export type GetCartAc = {
    type: typeof GET_CART,
    products: Array<InitialCart> | null
}

export type ArrayCartRes = Array<InitialCart>;