import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import notesReducer from './reducers/notesReducer';

const reducers = combineReducers({
    login: loginReducer,
    notes: notesReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;