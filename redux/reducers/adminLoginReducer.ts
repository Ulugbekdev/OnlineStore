import { GET_LOGIN_ADMIN, LOG_OUT_ADMIN } from '../../lib/constants';
import type { GetLoginAc, LoginData } from '../../lib/types/loginType/loginType';

let initialState: LoginData = {
    userName: null,
    userId: null
};

export default function adminLoginReducer(state = initialState, action: GetLoginAc): LoginData {
    switch (action.type) {
        case GET_LOGIN_ADMIN:
            return {
                ...state,
                userName: action.userData.userName,
                userId: action.userData.userId
            }
        case LOG_OUT_ADMIN:
            return {
                ...state,
                userName: null,
                userId: null
            }
        default:
            return state;
    }
}