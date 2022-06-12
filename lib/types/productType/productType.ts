import { ADD_PRODUCT } from '../../constants';
import { ADD_PRODUCTS } from '../../constants';
import { ADD_PRODUCTS_ADMIN } from '../../constants';

export type ProductData = {
    imgSrc: string | null
    title: string | null
    price: string | null
    id: string | null
    status: boolean,
}

export type ProductInitialState = {
    products: Array<ProductData> | null
};

export type AddProductsAc = {
    type: typeof ADD_PRODUCTS | typeof ADD_PRODUCTS_ADMIN
    products: Array<ProductData> | null
}

export type AddProductIdAc = {
    type: typeof ADD_PRODUCT
    product: ProductData | null
}

export type ArrayProductsRes = Array<ProductData>;

export type ProductIdInitialState = ProductData;