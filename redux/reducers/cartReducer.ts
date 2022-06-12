import { GET_CART } from '../../lib/constants';
import type { CartInitialState, GetCartAc } from '../../lib/types/cartType/cartType';

let initialState: CartInitialState = {
    products: null
}

export default function cartReducer (state = initialState, action: GetCartAc): CartInitialState {
    switch (action.type) {
        case GET_CART:
            return {
                products: action.products
            }
        default: 
            return state
    }
}