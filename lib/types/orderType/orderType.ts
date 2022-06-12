import { ADD_ORDERS } from '../../constants';

export type OrderProduct = {
    customer: string | null
    title: string | null
    product: string | null,
    price: string | null
    amount: string | null
    status: string | null
    date: string | null
    total: number | null
}

export type OrderInitialState = {
    orders: Array<OrderProduct> | null
};

export type AddOrdersAc = {
    type: typeof ADD_ORDERS
    orders: Array<OrderProduct> | null
}

export type ArrayOrdersRes = Array<OrderProduct>;