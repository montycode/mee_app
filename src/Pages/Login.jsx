import React, { Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from '@/Assets/img/pbh_2.png'

import { authenticationService } from '@/Services';
import { Navbar } from '../Components';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // redirect to home if already logged in
        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar logo={Logo} />
                <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl w-full space-y-8 p-4 shadow-2xl bg-white">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                            Iniciar Sesión
                            </h2>
                        </div>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().required('*Este campo es requerido'),
                                password: Yup.string().required('*Este campo es requerido')
                            })}
                            onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
                                setStatus();
                                authenticationService.login(email, password)
                                    .then(
                                        user => {
                                            const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
                                            this.props.history.push(from);
                                        },
                                        error => {
                                            setSubmitting(false);
                                            console.log(error)
                                            setStatus({
                                                sent: false,
                                                msg: `Oops! ${error}`
                                            });
                                        }
                                    );
                            }}
                            render={({ errors, status, touched, isSubmitting }) => (
                                <Form className="mt-8 space-y-6">
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div className="p-4">
                                            <label htmlFor="email" className="text-gray-900 font-semibold">Email</label>
                                            <Field name="email" type="email" className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.email && touched.email ? ' border-red-500' : '')} />
                                            <ErrorMessage name="email" component="div" className="italic font-bold text-red-500" />
                                        </div>
                                        <div className="p-4">
                                            <label htmlFor="password">Contraseña</label>
                                            <Field name="password" type="password" className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.password && touched.password ? ' border-red-500' : '')} />
                                            <ErrorMessage name="password" component="div" className="italic font-bold text-red-500" />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600" disabled={isSubmitting}>
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <svg className="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            Login
                                        </button>
                                        {isSubmitting &&
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }                                
                                        <a href="#" className="my-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-500 hover:bg-gray-600">
                                            Crear Cuenta
                                        </a>
                                    </div>
                                    {status && status.msg && (
                                    <p className={`text-center italic font-bold col-span-2 p-2 ${ status.sent ? "text-green-500" : "text-red-500"}`}>
                                        {status.msg}
                                    </p>
                                    )}
                                </Form>
                            )}
                        />
                    </div>
                </div>

            </Fragment>
        )
    }
}

export { Login }; 