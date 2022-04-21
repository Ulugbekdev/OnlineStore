import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './reducers/loginReducer';
import notesReducer from './reducers/notesReducer';
import productsReducer from "./reducers/productsReducer";

export const reducers = combineReducers({
    login: loginReducer,
    notes: notesReducer,
    products: productsReducer
})