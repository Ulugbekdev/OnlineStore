//login action
import type { GetLoginAcPayload, GetLoginAc, LogOutAc } from './types/loginType/loginType';
export const logOutAc = (type): LogOutAc => ({ type: type });
export const getLoginAc = (userData: GetLoginAcPayload, type): GetLoginAc => ({ type: type, userData: userData });

//product action
import type { ArrayProductsRes, AddProductsAc } from './types/productType/productType';
export const addProductsAc = (products: ArrayProductsRes, type): AddProductsAc => ({type: type, products: products});

//product with query id
import { ADD_PRODUCT } from './constants';
import type { ProductData } from './types/productType/productType';
export const addProductIdAc = (product: ProductData) => ({type: ADD_PRODUCT, product: product});

//notes action
import { ADD_NOTES } from './constants';
import type { AddNotesAc } from './types/notesType/notesType';
export const addNotesAc = (notes): AddNotesAc => ({type: ADD_NOTES, notes: notes});

//order action 
import { ADD_ORDERS} from './constants';
import type { ArrayOrdersRes, AddOrdersAc } from './types/orderType/orderType';
export const addOrdersAc = (orders: ArrayOrdersRes): AddOrdersAc => ({ type: ADD_ORDERS, orders: orders });

//cart action 
import { GET_CART } from './constants';
import { GetCartAc, ArrayCartRes } from './types/cartType/cartType';
export const getCartAc = (products: ArrayCartRes): GetCartAc => ({type: GET_CART, products: products});