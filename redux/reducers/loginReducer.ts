import { login } from '../requests/requests';
import { GET_LOGIN, LOG_OUT } from '../../lib/constants';
import type { LoginData, GetLoginAc } from '../../lib/types/loginType/loginType';

let initialState: LoginData = {
    userName: null,
    userId: null
};

export default function loginReducer(state = initialState, action: GetLoginAc): LoginData {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                userName: action.userData.userName,
                userId: action.userData.userId
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