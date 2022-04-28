import { combineReducers } from "@reduxjs/toolkit";
import adminLoginReducer from './reducers/adminLoginReducer';
import adminNotesReducer from './reducers/adminNotesReducer';
import adminOrdersReducer from "./reducers/adminOrderReducer";
import adminProductsReducer from "./reducers/adminProductsReducer";
import loginReducer from "./reducers/loginReducer";
import productIdReducer from "./reducers/productIdReducer";
import productsReducer from "./reducers/productsReducer";

export const reducers = combineReducers({
    adminLoginPage: adminLoginReducer,
    adminNotesPage: adminNotesReducer,
    adminProductsPage: adminProductsReducer,
    adminOrdersPage: adminOrdersReducer,
    loginPage: loginReducer,
    productsPage: productsReducer,
    productIdPage: productIdReducer
})