import { login } from '../requests/requests';

const GET_LOGIN = 'GET-LOGIN';
const LOG_OUT = 'LOG-OUT';

type InitialState = {
    userName: string | null
    userId: string | null
}

type GetLoginAcPayload = {
    userId: string
    userName: string
}

type GetLoginAc = {
    type: typeof GET_LOGIN
    user: GetLoginAcPayload
}

type LogOutAc = {
    type: typeof LOG_OUT
}

let initialState: InitialState = {
    userName: null,
    userId: null
};

type GetLogin = {
    login: string | null
    password: string | null
}

type LoginFormData = {
    login: string | null
    password: string | null
}

export default function loginReducer(state = initialState, action): InitialState {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                userName: action.user.userName,
                userId: action.user.userId
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

export const getLoginAc = (userData: GetLoginAcPayload): GetLoginAc => ({ type: GET_LOGIN, user: userData });
export const logOutAc = (): LogOutAc => ({ type: LOG_OUT });

export const getlogin = (data: LoginFormData) => async dispatch => {
    const res = await login.getLogin(data);
    return new Promise((resolve, reject) => {
        if (res.data.statusCode === 200) {
            const userId = res.data.userData.id;
            const userName = res.data.userData.login;
            localStorage.setItem('userId', userId);
            localStorage.setItem('userName', userName);
            return resolve(dispatch(getLoginAc({
                userId: userId,
                userName: userName
            })));
        }
        return reject(res.data.message);
    })
}

export const register = (data: LoginFormData) => async dispatch => {
    const res = await login.register(data);
    const userId = res.data.userData.id;
    const userName = res.data.userData.login;
    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', userName);
    dispatch(getLoginAc({
        userId: userId,
        userName: userName
    }));
}