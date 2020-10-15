import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { SignInPage } from './pages/sign-in.page';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={null} />
                <Route path="/sign-in" component={SignInPage} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));