import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import navReducer from "./Nav-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./App-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    nav: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store;