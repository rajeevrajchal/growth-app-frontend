import axios, {AxiosError, AxiosResponse} from 'axios';
import {userDataInterafce} from "../modules/auth/interface";
import parseError from "../plugins/error";

import {login} from "./apiList";

export const loginApi = async (userInfo: userDataInterafce) => {
    return await axios.post(login, userInfo).then(
        (res: AxiosResponse<any>) => res.data
    ).catch((e: AxiosError<any>) => parseError(e))
}