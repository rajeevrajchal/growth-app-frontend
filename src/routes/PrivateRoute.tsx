import React from 'react';

import {Route, Redirect, RouteProps} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../store/interface";

interface PrivateRouteProps extends RouteProps {
    component: React.FC<RouteProps>
    name?: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
    const {component: Component, ...rest} = props;
    const {isLoggedIn} = useSelector((state: RootState) => state.authReducer)
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={'/'}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;