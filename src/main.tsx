
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import configureStore from '@/store'

import { SignIn } from '@/pages/SignIn';
import { Dashboard } from '@/pages/Dashboard';
import { AuthRoute } from '@/components/AuthRoute';

const store = configureStore()

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline />
                <Switch>
                    <Route path="/sign-in" component={SignIn} />
                    <AuthRoute path="/" component={Dashboard} />
                </Switch>
            </Router>
        </Provider>
    )
}

if ((module as any).hot) {
    (module as any).hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));