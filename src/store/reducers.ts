import { Reducer, combineReducers } from "redux";

import modalReducer from "../common/partials/modal/services/modalReducer";
import authReducer from "../modules/auth/services/authReducer";

const rootReducer: Reducer = combineReducers({
    modalReducer,
    authReducer
})


export default rootReducer;
