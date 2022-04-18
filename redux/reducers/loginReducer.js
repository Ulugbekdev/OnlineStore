import { login } from '../requests/requests';

const GET_LOGIN = 'GET-LOGIN';
const LOG_OUT = 'LOG-OUT';

let initialState = {};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                userName: action.user.login,
                userId: action.user.id
            }
        case LOG_OUT:
            return {
                ...state,
                userName: null,
                userId: null
            }
        default:
            return state;
    }
}

export const getLoginAc = userData => ({ type: GET_LOGIN, user: userData });
export const logOutAc = () => ({ type: LOG_OUT });

export const getlogin = (data) => async dispatch => {
    const res = await login.getLogin(data);

    return new Promise((resolve, reject) => {
        if (res.data.statusCode === 200) {
            localStorage.setItem('userId', res.data.userData.id);
            localStorage.setItem('userName', res.data.userData.login);
            return resolve(dispatch(getLoginAc(res.data.userData)));
        }
        return reject(res.data.message);
    })
}

export const register = (data) => async dispatch => {
    const res = await login.register(data);
    localStorage.setItem('userName', res.data.userData.login);
    localStorage.setItem('userId', res.data.userData.id);
    dispatch(getLoginAc(res.data.userData));
}