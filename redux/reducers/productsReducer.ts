import { ADD_PRODUCTS } from '../../lib/constants';
import type { ProductInitialState, AddProductsAc } from './../../lib/types/productType/productType';

let initialState: ProductInitialState = {
    products: null
}

export default function productsReducer (state = initialState, action: AddProductsAc): ProductInitialState {
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