import {orders} from '../requests/requests';

const ADD_ORDERS = 'ADD-ORDERS';

type InitialOrder = {
    customer: string | null
    title: string | null
}

type InitialState = {
    orders: Array<InitialOrder> | null
};

type AddOrdersAc = {
    type: typeof ADD_ORDERS
    orders: Array<InitialOrder> | null
}

type ArrayOrdersRes = Array<InitialOrder>;

let initialState: InitialState = {
    orders: null
}

export default function orderssReducer (state = initialState, action): InitialState {
    switch (action.type) {
        case ADD_ORDERS:
            return {
                ...state,
                orders: action.orders
            }
        default:
            return state;
    }
}

const addOrdersAc = (orders: ArrayOrdersRes): AddOrdersAc => ({type: ADD_ORDERS, orders: orders});

export const addOrders = () => async dispatch => {
    const res = await orders.getOrders();
    dispatch(addOrdersAc(res.data.body));
};