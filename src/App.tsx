import React, {useEffect} from 'react';
import './assets/styles/theme.scss';
import Routes from "./routes";
import authRoute from "./modules/auth/routes/authRoute";
import {useDispatch} from "react-redux";
import {checkAuthentication} from './store/actions'
import Toaster from "./common/partials/toaster";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuthentication())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Toaster title={'some'} type={'success'} appear={true} message={'done'}/>
            <Routes routeItems={authRoute}/>
        </>
    );
}

export default App;
