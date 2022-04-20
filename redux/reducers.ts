import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './reducers/loginReducer';
import notesReducer from './reducers/notesReducer';

export const reducers = combineReducers({
    login: loginReducer,
    notes: notesReducer
})