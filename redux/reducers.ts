import { combineReducers } from "@reduxjs/toolkit";
import adminLoginReducer from './reducers/adminLoginReducer';
import adminNotesReducer from './reducers/notesReducer';
import adminOrdersReducer from "./reducers/orderReducer";
import adminProductsReducer from "./reducers/adminProductsReducer";
import cartReducer from "./reducers/cartReducer";
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
    productIdPage: productIdReducer,
    cartPage: cartReducer
})