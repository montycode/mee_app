import React from 'react';
import { Router, Route } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { history } from '@/Helpers';
import { authenticationService } from '@/Services';
import { PrivateRoute } from '@/Components';
import { Login, Home, Register, Booking, Payment, Topic, Confirmation, ProfileData, MyDates, Meeting, TernsAndConditions, Privacity, MeetingLawyer, Coments } from '@/Pages';

import '../Assets/css/style.css'
import 'tailwindcss/tailwind.css'

// const promise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
// const promise = loadStripe("sk_test_51Hn9BPLmSk7TgFzaQsQk3p916kTNnioSg1jgI60k31NEq9VTVSHslImSoqCAhScTvdEaq0u8Y6plCYHuTpVUMPut00PTdk1wTp");
const promise = loadStripe("pk_test_51Hn9BPLmSk7TgFzaNASsFmyupJOFS25O3aGL9gNpn3CkVABc22ajB0gJ4NWj8WvNst2C98QEP2MthJMcuglo7BCs00CXmjKH6A");

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
                    <ReactNotification />
                    <Elements stripe={promise}>
                        <PrivateRoute exact path="/payment" component={Payment} />
                        {/* <Route exact path="/payment" component={Payment} /> */}
                    </Elements>
                    <PrivateRoute exact path="/confirmation" component={Confirmation} />
                    <PrivateRoute exact path="/profile-data" component={ProfileData} />
                    <PrivateRoute exact path="/booking" component={Booking} />
                    <PrivateRoute exact path="/coments" component={Coments} />
                    <PrivateRoute exact path="/dates" component={MyDates} />
                    <PrivateRoute exact path="/date" component={Meeting} />
                    <PrivateRoute exact path="/date-lawyer" component={MeetingLawyer} />

                    {/* PUBLIC */}
                    <Route exact path="/topics/:id" component={Topic} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/terms" component={TernsAndConditions} />
                    <Route exact path="/privacity" component={Privacity} />
                    {/* PUBLIC */}

                    {/* TESTING ONLY */}
                    {/* <Route exact path="/confirmation" component={Confirmation} />
                    <Route exact path="/profile-data" component={ProfileData} />
                    <Route exact path="/booking" component={Booking} />
                    <Route exact path="/dates" component={MyDates} />
                    <Route exact path="/date" component={Meeting} /> */}
                    {/* TESTING ONLY */}
                </main>
            </Router>
        );
    }
}

export { App };