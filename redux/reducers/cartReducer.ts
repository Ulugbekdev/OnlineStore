import { GET_CART } from '../../lib/constants';
import type { CartInitialState } from './../../lib/types';

let initialState: CartInitialState = {
    products: null
}

export default function cartReducer (state = initialState, action): CartInitialState {
    switch (action.type) {
        case GET_CART:
            return {
                products: action.products
            }
        default: 
            return state
    }
}