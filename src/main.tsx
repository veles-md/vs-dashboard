
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';

import { SignIn } from 'pages/SignIn';
import { Dashboard } from 'pages/Dashboard';
import { AuthRoute } from 'components/AuthRoute';

const App = () => {


    return (
        <Router>
            <Link to="/">Dashboard</Link>
            <Link to="/sign-in">Sign-In</Link>
            <Switch>
                <Route path="/sign-in" component={SignIn} />
                <AuthRoute path="/" component={Dashboard} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));