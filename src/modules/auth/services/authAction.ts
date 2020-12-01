import * as actionType from './authType'
import {Dispatch} from "react";
import {userDataInterafce} from "../interface";
import {loginApi} from "../../../api/authApi";

const loginSuccess: any = (user_detail: any) => {
    return {
        type: actionType.AUTH_SUCCESS,
        login_user: user_detail
    }
}

const logoutSuccess: any = () => {
    return {
        type: actionType.AUTH_LOGOUT,
    }
}

export const checkAuthentication: Function = () => async (dispatch: Dispatch<any>) => {
    try{
        let user = localStorage.getItem("user");
        if (!user) {
            dispatch(logoutSuccess)
        } else {
            const userDetail = JSON.parse(user);
            dispatch(loginSuccess(userDetail))
        }
    }catch (e) {
        console.log(e)
    }
}

export const loginUser: Function = (userData: userDataInterafce) => async (dispatch: Dispatch<any>) => {
    try{
        const user = await loginApi(userData)
        console.log(user)
        if(user.status === 'error'){
            console.log('empty data ')
            dispatch(logoutSuccess)
        }else{
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(loginSuccess(user))
        }
    }catch (e) {
        console.log(e)
    }
}

export const logoutUser = () => (dispatch: Dispatch<any>) => {
    try {
        localStorage.removeItem("user");
        dispatch(logoutSuccess())
    } catch (e) {
        console.log('e')
    }
}

