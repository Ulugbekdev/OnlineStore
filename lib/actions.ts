import { GET_LOGIN, LOG_OUT } from "./constants";
import type { GetLoginAcPayload, GetLoginAc, LogOutAc } from "./types";

export const logOutAc = (): LogOutAc => ({ type: LOG_OUT });
export const getLoginAc = (userData: GetLoginAcPayload): GetLoginAc => ({ type: GET_LOGIN, user: userData });