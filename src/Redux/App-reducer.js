import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'


let initialState = {
    initialized: false
}


const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializingSuccess = () => ({type: SET_INITIALIZED})
export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getUserData())
    promise.then(()=> {
        dispatch(initializingSuccess())
    })

}


export default AppReducer