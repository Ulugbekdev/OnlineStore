import { combineReducers } from "@reduxjs/toolkit";
import adminLoginReducer from './reducers/adminLoginReducer';
import adminNotesReducer from './reducers/adminNotesReducer';
import adminOrdersReducer from "./reducers/adminOrderReducer";
import adminProductsReducer from "./reducers/adminProductsReducer";

export const reducers = combineReducers({
    adminLoginPage: adminLoginReducer,
    adminNotesPage: adminNotesReducer,
    adminProductsPage: adminProductsReducer,
    adminOrdersPage: adminOrdersReducer
})