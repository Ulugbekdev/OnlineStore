//login thunk
import { login } from '../redux/requests/requests';
import {GET_LOGIN, GET_LOGIN_ADMIN } from './constants'; 
import { getLoginAc } from '../lib/actions';
import { LoginFormData } from './types';
export const loginThunk = (data: LoginFormData, islogin: boolean, isAdmin: boolean) => async dispatch => {
    const reqData = isAdmin ? {...data, typeUser: 'admin'} : {...data, typeUser: 'customer'};
    const res = islogin ? await login.getLogin(reqData) : await login.register(reqData);
    const userIdLC = isAdmin ? 'userIdAdmin' : 'userId';
    const userNameLC = isAdmin ? 'userNameAdmin' : 'userName';

    return new Promise((resolve, reject) => {
        if (res.data.statusCode === 200) {
            const userId = res.data.body.userId;
            const userName = res.data.body.userName;
            localStorage.setItem(userIdLC, userId);
            localStorage.setItem(userNameLC, userName);
            return resolve(dispatch(getLoginAc({
                userId: userId,
                userName: userName
            }, isAdmin ? GET_LOGIN_ADMIN : GET_LOGIN)));
        }
        return reject(res.data.message);
    })
};

//products thunk
import { products } from '../redux/requests/requests';
import { ADD_PRODUCTS, ADD_PRODUCTS_ADMIN} from './constants';
import { addProductIdAc, addProductsAc} from '../lib/actions';
export const productsThunk = (isAdmin: boolean) => async (dispatch: any) => {
    const res = await products.getProducts();
    dispatch(addProductsAc(res.data.body, isAdmin ? ADD_PRODUCTS_ADMIN : ADD_PRODUCTS));
};

export const productThunk = (id: string | Array<string>) => async (dispatch: any) => {
    const res = await products.getProduct(id);
    const product = res.data.product;
    dispatch(addProductIdAc({
        id: product.id,
        name: product.name,
        price: product.price,
        status: product.status,
        imgSrc: product.imgSrc
    }));
}

//notes thunk
import { addNotesAc } from '../lib/actions';
import { GetNotes, NotesFormData } from './types';
import { notes } from '../redux/requests/requests';
export const getNotesThunk = (userId: GetNotes) => async dispatch => {
    const res = await notes.getNotes(userId);
    dispatch(addNotesAc(res.data.body));
};

export const addNotesThunk = (data: NotesFormData) => () => {
    return notes.addNotes(data);
};

export const delNotesThunk = (data: NotesFormData) => () => {
    return notes.delNotes(data);
};

//order thunk
import { orders } from '../redux/requests/requests';
import { addOrdersAc } from '../lib/actions';
export const addOrdersThunk = () => async (dispatch: any) => {
    const res = await orders.getOrders();
    dispatch(addOrdersAc(res.data.body));
};

//cart shoppping thunk
import { cart } from '../redux/requests/requests';
import { getCartAc } from './actions';
export const getCartThunk = (userId: any) => async (dispatch: any) => {
    const res = await cart.getCart(userId);
    dispatch(getCartAc(res.data.products));
};
export const addCartThunk = (data: any) => async () => {
    await cart.addCart(data);
};
export const increaseNumberCartThunk = (data: any) => async (dispatch: any) => {
    await cart.increaseNumber(data);
};
export const decreaseQuantityCartThunk = (data: any) => async (dispatch: any) => {
    await cart.decreaseQuantity(data);
};