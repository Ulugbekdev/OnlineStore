import { ADD_ORDERS } from '../../lib/constants';
import type { OrderInitialState } from '../../lib/types';

let initialState: OrderInitialState = {
    orders: null
}

export default function orderssReducer(state = initialState, action): OrderInitialState {
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