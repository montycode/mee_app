import React, { Fragment } from 'react';

import { authenticationService } from '@/Services';
import { Navbar } from '@/Components';
import Logo from '@/Assets/img/pbh_2.png'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    render() {
        return (
            <Fragment>
                <Navbar logo={Logo} />
                <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl w-full space-y-8 p-4 shadow-2xl bg-white">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                            Mis Citas
                            </h2>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="rounded-md -space-y-px">
                                <div className="p-4">
                                    <p className="text-center italic font-bold col-span-2 p-2 text-green-500text-red-500">
                                        *No tienes citas registradas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export { Dashboard };