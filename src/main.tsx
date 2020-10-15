
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import { SignIn } from 'pages/SignIn';
import { Dashboard } from 'pages/Dashboard';
import { AuthRoute } from 'components/AuthRoute';


const App = () => {


    return (
        <Router>
            <CssBaseline />
            <Switch>
                <Route path="/sign-in" component={SignIn} />
                <AuthRoute path="/" component={Dashboard} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));