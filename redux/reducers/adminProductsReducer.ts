import { ADD_PRODUCTS_ADMIN } from '../../lib/constants';
import type { AddProductsAc, ProductInitialState } from './../../lib/types/productType/productType';

let initialState: ProductInitialState = {
    products: null
}

export default function adminProductsReducer (state = initialState, action: AddProductsAc): ProductInitialState {
    switch (action.type) {
        case ADD_PRODUCTS_ADMIN:
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}