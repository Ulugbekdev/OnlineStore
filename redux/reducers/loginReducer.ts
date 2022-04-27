import { login } from '../requests/requests';
import { GET_LOGIN, LOG_OUT } from '../../lib/constants';
import type { LoginInitialState, GetLoginAcPayload, LoginFormData, LogOutAc, GetLoginAc} from '../../lib/types';

let initialState: LoginInitialState = {
    userName: null,
    userId: null
};

export default function loginReducer (state = initialState, action): LoginInitialState {
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