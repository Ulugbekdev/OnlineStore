import {products} from '../requests/requests';

const ADD_PRODUCTS = 'ADD-PRODUCTS';

type InitialProduct = {
    imgSrc: string | null
    title: string | null
    price: string | null
    amount: string | null
    id: string | null
    status: boolean,
}

type InitialState = {
    products: Array<InitialProduct> | null
};

type AddProductsAc = {
    type: typeof ADD_PRODUCTS
    products: Array<InitialProduct> | null
}

type ArrayProductsRes = Array<InitialProduct>;

let initialState: InitialState = {
    products: null
}

export default function productsReducer (state = initialState, action): InitialState {
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

const addProductsAc = (products: ArrayProductsRes): AddProductsAc => ({type: ADD_PRODUCTS, products: products});

export const addProducts = () => async dispatch => {
    const res = await products.getProducts();
    dispatch(addProductsAc(res.data.body));
};