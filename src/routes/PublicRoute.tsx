import React from 'react';

import {Route, Redirect, RouteProps} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../store/interface";

interface PublicRouteProps extends RouteProps {
    component: React.FC<RouteProps>
    name?: string
}

const PublicRoute: React.FC<PublicRouteProps> = (props) => {
    const {component: Component, ...rest} = props;
    const { isLoggedIn } = useSelector((state: RootState) => state.authReducer)
    return (
        <Route
            {...rest}
            render={props =>
                !isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={'/admin'}
                    />
                )
            }
        />
    );
};

export default PublicRoute;