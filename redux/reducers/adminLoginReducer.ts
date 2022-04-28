import { login } from '../requests/requests';
import { GET_LOGIN_ADMIN, LOG_OUT_ADMIN } from '../../lib/constants';
import type { LoginInitialState } from '../../lib/types';

let initialState: LoginInitialState = {
    userName: null,
    userId: null
};

export default function adminLoginReducer(state = initialState, action): LoginInitialState {
    switch (action.type) {
        case GET_LOGIN_ADMIN:
            return {
                ...state,
                userName: action.user.userName,
                userId: action.user.userId
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