import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type TAuthRoute = {
    roles?: Array<string>
} & RouteProps;

export const AuthRoute = ({ component: Component, path }: TAuthRoute) => {
    if (true) {
        return <Redirect to="/sign-in" />;
    }

    return <Route component={Component} path={path} />;
};
