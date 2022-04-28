import { LoginFormData } from './types';
import { login, products } from './../redux/requests/requests';
import { addProductsAc, getLoginAc } from '../lib/actions';
import { ADD_PRODUCTS, ADD_PRODUCTS_ADMIN, GET_LOGIN, GET_LOGIN_ADMIN } from './constants';

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

export const productsThunk = (isAdmin: boolean) => async dispatch => {
    const res = await products.getProducts();
    dispatch(addProductsAc(res.data.body, isAdmin ? ADD_PRODUCTS_ADMIN : ADD_PRODUCTS));
};