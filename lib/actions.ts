//login action
import type { GetLoginAcPayload, GetLoginAc, LogOutAc } from './types';
export const logOutAc = (type): LogOutAc => ({ type: type });
export const getLoginAc = (userData: GetLoginAcPayload, type): GetLoginAc => ({ type: type, user: userData });

//product action
import type { ArrayProductsRes, AddProductsAc } from './types';
export const addProductsAc = (products: ArrayProductsRes, type): AddProductsAc => ({type: type, products: products});

//product with query id
import { ADD_PRODUCT } from './constants';
import type { InitialProductId } from './types';
export const addProductIdAc = (product: InitialProductId) => ({type: ADD_PRODUCT, product: product});

//notes action
import { ADD_NOTES } from './constants';
import type { AddNotesAc } from './types';
export const addNotesAc = (notes): AddNotesAc => ({type: ADD_NOTES, notes: notes});

//order action 
import { ADD_ORDERS} from './constants';
import type { ArrayOrdersRes, AddOrdersAc } from './types';
export const addOrdersAc = (orders: ArrayOrdersRes): AddOrdersAc => ({ type: ADD_ORDERS, orders: orders });