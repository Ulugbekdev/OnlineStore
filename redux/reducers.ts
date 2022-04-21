import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './reducers/loginReducer';
import notesReducer from './reducers/notesReducer';
import orderssReducer from "./reducers/orderReducer";
import productsReducer from "./reducers/productsReducer";

export const reducers = combineReducers({
    loginPage: loginReducer,
    notesPage: notesReducer,
    productsPage: productsReducer,
    ordersPage: orderssReducer
})