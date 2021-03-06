
import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';

import { ApplicationBar } from '@/components/ApplicationBar';


const Settings = () => <div>Settings</div>
const Home = () => <div>Dashboard Home page</div>

export const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <ApplicationBar />
            <div>
                <h2>Dashboard page</h2>
                <Link to={`${url}`}>Dashboard home</Link>
                <Link to={`${url}settings`}>Settings</Link>
                <main>
                    <Switch>
                        <Route exact path={path} component={Home} />
                        <Route path={`${path}settings`} component={Settings} />
                    </Switch>
                </main>
            </div>

        </div>

    )
};

