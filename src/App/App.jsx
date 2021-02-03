import React from 'react';
import { Router, Route } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { history } from '@/Helpers';
import { authenticationService } from '@/Services';
import { PrivateRoute } from '@/Components';
import { Dashboard, Login, Home, Register, Booking, Payment, BookingDetails, Topic, Confirmation } from '@/Pages';

import '../Assets/css/style.css'
import 'tailwindcss/tailwind.css'

const promise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

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
                    <PrivateRoute exact path="/booking" component={ Booking } />
                    <Elements stripe={promise}>
                        <PrivateRoute exact path="/payment" component={ Payment } />
                    </Elements>
                    <PrivateRoute exact path="/confirmation" component={ Confirmation } />
                    <PrivateRoute exact path="/details" component={ BookingDetails } />
                    <Route exact path="/topics/:id" component={Topic} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                </main>
            </Router>
        );
    }
}

export { App }; 