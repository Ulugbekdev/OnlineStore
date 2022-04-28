import { ADD_PRODUCT } from '../../lib/constants';
import type { ProductIdInitialState } from './../../lib/types';

let initialState: ProductIdInitialState = {
    id: null,
    name: null,
    price: null,
    status: null,
    imgSrc: null
}

export default function productIdReducer (state = initialState, action): ProductIdInitialState {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                id: action.product.id,
                name: action.product.name,
                price: action.product.price,
                status: action.product.status,
                imgSrc: action.product.imgSrc
            }
        default:
            return state;
    }
}