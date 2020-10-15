
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';

import { SignInPage } from 'components/pages/sign-in';
import { DashboardPage } from 'components/pages/dashboard';
import { AuthRoute } from 'components/shared/AuthRoute';

const App = () => {
    return (
        <Router>
            <Link to="/">Dashboard</Link>
            <Link to="/sign-in">Sign-In</Link>
            <Switch>
                <AuthRoute exact path="/" component={DashboardPage} />
                <Route path="/sign-in" component={SignInPage} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));