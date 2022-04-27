import { LoginFormData } from './types';
import { login } from './../redux/requests/requests';
import { getLoginAc } from '../lib/actions';

export const loginThunk = (data: LoginFormData, islogin: boolean, isAdmin: boolean) => async dispatch => {
    const res =islogin ? await login.getLogin(data) : await login.register(data);
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
            })));
        }
        return reject(res.data.message);
    })
};