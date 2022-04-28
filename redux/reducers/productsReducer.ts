import { ADD_PRODUCTS } from '../../lib/constants';
import type { ProductInitialState } from './../../lib/types';

let initialState: ProductInitialState = {
    products: null
}

export default function productsReducer (state = initialState, action): ProductInitialState {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}