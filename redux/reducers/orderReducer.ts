import { ADD_ORDERS } from '../../lib/constants';
import type { AddOrdersAc, OrderInitialState } from '../../lib/types/orderType/orderType';

let initialState: OrderInitialState = {
    orders: null
}

export default function orderssReducer(state = initialState, action: AddOrdersAc): OrderInitialState {
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