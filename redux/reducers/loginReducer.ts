import { login } from '../requests/requests';

const GET_LOGIN = 'GET-LOGIN';
const LOG_OUT = 'LOG-OUT';

type InitialStateType = {
    userName: string | null
    userId: string | null
}

type GetLoginAcPayloadType = {
    userId: string
    userName: string
}

type GetLoginAcType = {
    type: typeof GET_LOGIN
    user: GetLoginAcPayloadType
}

type LogOutAcType = {
    type: typeof LOG_OUT
}

let initialState: InitialStateType = {
    userName: null,
    userId: null
};

export default function loginReducer(state = initialState, action): InitialStateType {
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

export const getLoginAc = (userData: GetLoginAcPayloadType): GetLoginAcType => ({ type: GET_LOGIN, user: userData });
export const logOutAc = (): LogOutAcType => ({ type: LOG_OUT });

export const getlogin = (data) => async dispatch => {
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

export const register = (data) => async dispatch => {
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