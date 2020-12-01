import * as actionTypes from './authType'
import {AuthInterface} from "../interface";

const initialState:AuthInterface = {
    isLoggedIn:false,
    login_user:{}
}

const authReducer = (state = initialState, action:any) =>{
    const { type,login_user } = action
    switch(type){
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                isLoggedIn:true,
                loginUser:login_user
            };
        case actionTypes.AUTH_LOGOUT:
            return initialState
        default:
            return state
    }
}
export default authReducer
