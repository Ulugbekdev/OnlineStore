import { LOG_OUT_ADMIN, LOG_OUT, GET_LOGIN_ADMIN, GET_LOGIN } from './../../constants';

export type LoginData = {
    userName: string | null
    userId: string | null
}

export type GetLoginAcPayload = {
    userId: string
    userName: string
}

export type LoginFormData = {
    login: string | null
    password: string | null
}

export type GetLoginAc = {
    type: typeof GET_LOGIN | typeof GET_LOGIN_ADMIN | typeof LOG_OUT_ADMIN | typeof LOG_OUT
    userData: GetLoginAcPayload
}

export type LogOutAc = {
    type: typeof LOG_OUT
}