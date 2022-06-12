import { ADD_PRODUCT } from '../../lib/constants';
import type { ProductIdInitialState, AddProductIdAc } from './../../lib/types/productType/productType';

let initialState: ProductIdInitialState = {
    id: null,
    title: null,
    price: null,
    status: null,
    imgSrc: null
}

export default function productIdReducer (state = initialState, action: AddProductIdAc): ProductIdInitialState {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                id: action.product.id,
                title: action.product.title,
                price: action.product.price,
                status: action.product.status,
                imgSrc: action.product.imgSrc
            }
        default:
            return state;
    }
}