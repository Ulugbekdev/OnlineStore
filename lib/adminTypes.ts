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