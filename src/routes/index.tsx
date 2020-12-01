import React from 'react';
import {Switch} from 'react-router-dom'
import {RouteInterface, RoutePropsInterface} from "./routeInterface";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes: React.FC<RoutePropsInterface> = (props) => {
    const {
        routeItems,
    } = props
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {

                    routeItems.map((route: RouteInterface, key: number) => (
                        !route.isAuth
                            ? <PublicRoute
                                path={`${route.path}`}
                                component={route.component}
                                exact={route.exact}
                                key={key}
                            />
                            : <PrivateRoute
                                path={`${route.path}`}
                                component={route.component}
                                exact={route.exact}
                                key={key}
                            />
                    ))
                }

            </Switch>
        </React.Suspense>
    );
};

export default Routes;
