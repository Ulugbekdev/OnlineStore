import type { GetLoginAcPayload, GetLoginAc, LogOutAc } from './types';
import type {ArrayProductsRes, AddProductsAc} from './types';

//login action
export const logOutAc = (type): LogOutAc => ({ type: type });
export const getLoginAc = (userData: GetLoginAcPayload, type): GetLoginAc => ({ type: type, user: userData });

//product action
export const addProductsAc = (products: ArrayProductsRes, type): AddProductsAc => ({type: type, products: products});