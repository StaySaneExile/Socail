import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import navReducer from "./Nav-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    nav: navReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);
window.store = store
export default store;