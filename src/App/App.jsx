import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from '@/Helpers';
import { authenticationService } from '@/Services';
import { PrivateRoute } from '@/Components';
import { Dashboard, Login, Home, Register } from '@/Pages';

import '../Assets/css/style.css'
import 'tailwindcss/tailwind.css'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    render() {
        return (
            <Router history={history}>
                <main className="h-full bg-gray-50">
                    <PrivateRoute exact path="/dashboard" component={ Dashboard } />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                </main>
            </Router>
        );
    }
}

export { App }; 