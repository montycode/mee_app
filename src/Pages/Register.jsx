import React, { Fragment } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import Logo from '@/Assets/img/pbh_2.png'

import { authenticationService, userService } from '@/Services';
import { Navbar } from '../Components';

class Register extends React.Component {

    constructor(props) {
        super(props);
        // redirect to home if already logged in
        if (authenticationService.currentUserValue) {
            this.props.history.push('/');
        }
    }

    render() {

        // let state = this.props.location.state;
        return (
            
            <Fragment>
                <Navbar logo={Logo} />
                <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl w-full space-y-8 p-4 shadow-2xl bg-white">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                                Crear Cuenta
                            </h2>
                        </div>
                        <Formik
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                termsAndCoditions: '',
                                terms: '',
                            }}
                            validationSchema={Yup.object().shape({
                                first_name: Yup.string().required('*Este campo es requerido'),
                                last_name: Yup.string().required('*Este campo es requerido'),
                                email: Yup.string().required('*Este campo es requerido'),
                                password: Yup.string().required('*Este campo es requerido'),
                                confirmPassword: Yup.string().required('*Este campo es requerido').when("password", {
                                    is: val => (val && val.length > 0 ? true : false),
                                    then: Yup.string().oneOf(
                                        [Yup.ref("password")],
                                        "Las contraseñas deben coincidir."
                                    )
                                }),
                                terms: Yup.string().required('*Acepté los terminos para continuar')
                            })}
                            onSubmit={({ first_name, last_name, email, password }, { setStatus, setSubmitting }) => {
                                setStatus();
                                userService.createUser(first_name, last_name, email, password).then(
                                    user => {
                                        console.warn(user)
                                        setSubmitting(false);
                                        setStatus({
                                            sent: true,
                                            msg: "Registro exitoso, deberás confirmar tu correo electrónico antes de acceder a la aplicación."
                                        });
                                    },
                                    error => {
                                        setSubmitting(false);
                                        setStatus({
                                            sent: false,
                                            msg: `Oops! ${error}. Algo salió mal, intenta nuevamente.`
                                        });
                                    }
                                );
                            }}
                            render={({ errors, status, touched, isSubmitting }) => (
                                <Form className="mt-8 space-y-6 ">
                                    <div className="grid grid-cols-2 rounded-md shadow-sm -space-y-px">
                                        <div className="col-span-2 md:col-span-1 p-2 p-4">
                                            <label htmlFor="first_name" className="text-gray-900 font-semibold">Nombre</label>
                                            <Field name="first_name" type="text" className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.first_name && touched.first_name ? ' border-red-500' : '')} />
                                            <ErrorMessage name="first_name" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>
                                        <div className="col-span-2 md:col-span-1 p-2 p-4">
                                            <label htmlFor="last_name" className="text-gray-900 font-semibold">Apellido</label>
                                            <Field name="last_name" type="text" className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.last_name && touched.last_name ? ' border-red-500' : '')} />
                                            <ErrorMessage name="last_name" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>
                                        <div className="col-span-2 p-4">
                                            <label htmlFor="email" className="text-gray-900 font-semibold">Correo Electrónico</label>
                                            <Field name="email" type="email" className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.email && touched.email ? ' border-red-500' : '')} />
                                            <ErrorMessage name="email" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>
                                        <div className="col-span-2 p-4">
                                            <label htmlFor="password" className="text-gray-900 font-semibold">Contraseña</label>
                                            <Field name="password" type="password" className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.password && touched.password ? ' border-red-500' : '')} />
                                            <ErrorMessage name="password" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>
                                        <div className="col-span-2 p-4">
                                            <label htmlFor="confirmPassword" className="text-gray-900 font-semibold">Confirmar Contraseña</label>
                                            <Field name="confirmPassword" type="password" className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.confirmPassword && touched.confirmPassword ? ' border-red-500' : '')} />
                                            <ErrorMessage name="confirmPassword" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>
                                        <div className="col-span-2 p-4">
                                            {/* <TermsConditions /> */}
                                            <Field type="checkbox" id="terms" name="terms" className="form-checkbox text-indigo-600" />
                                            <label htmlFor="terms">
                                                <span className="m-1 text-sm">Acepto los <Link
                                                    // href="/terms"
                                                    // target="popup"
                                                    to="/#"
                                                    onClick={() => window.open('/terms','popup','width=600,height=600')}
                                                    className="text-black font-bold font-sans"
                                                >Términos y Condiciones</Link> y <Link
                                                    // href="/privacity"
                                                    // target="popup"
                                                    to="/#"
                                                    onClick={() => window.open('/privacity','popup','width=600,height=600')}
                                                    className="text-black font-bold font-sans"
                                                >Aviso de privacidad</Link>
                                                </span>
                                            </label>
                                            <ErrorMessage name="terms" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>

                                        {status && status.msg && (
                                            <p className={`text-center italic font-bold font-sans col-span-2 p-2 ${status.sent ? "text-gray-900" : "text-red-500"}`}>
                                                {status.msg}
                                            </p>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        {isSubmitting &&
                                            <div className="flex justify-around p-2">
                                                <div className="inline-flex rounded-md">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gary-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                </div>
                                            </div>}


                                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600" disabled={isSubmitting}>
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <svg className="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            Crear Cuenta
                                        </button>
                                        <Link to='/login' className="my-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-500 hover:bg-gray-600">
                                            Iniciar Sesión
                                        </Link>
                                    </div>
                                </Form>
                            )}
                        />
                    </div>
                </div>

            </Fragment>
        )
    }
}

export { Register };