import React, { Fragment, useState, useEffect } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { Navbar } from '@/Components'
import { topicService, bookingService } from '@/Services'
import { useHistory } from "react-router"
import { Link } from 'react-router-dom'

import moment from 'moment'
require('moment-timezone');
import Logo from '@/Assets/img/pbh_2.png'
import * as Yup from 'yup'


export const Booking = () => {
    const [topics, setTopics] = useState({})
    const [loading, setLoading] = useState(true)
    const history = useHistory();

    useEffect(() => {
        topicService.getTopics()
            .then(topics => {
                setTopics(topics)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);

    console.log(topics);
    return (
        <Fragment>
            <div className="w-full bg-gray-100">
                <div className="p-4">
                    <Navbar logo={Logo} />
                    <div className="flex md:p-10">
                        <div className="w-1/4">
                            <div className="relative mb-2">
                                <div className="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
                                    <span className="text-center text-white w-full">
                                        1
                        </span>
                                </div>
                            </div>
                            <div className="text-xs text-center md:text-base">Agendar Consulta</div>
                        </div>
                        <div className="w-1/4">
                            <div className="relative mb-2">
                                <div className="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
                                    <span className="text-center text-white w-full">
                                        2
                        </span>
                                </div>
                            </div>
                            <div className="text-xs text-center md:text-base">Realiza tu pago</div>
                        </div>
                        <div className="w-1/4">
                            <div className="relative mb-2">
                                <div className="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
                                    <span className="text-center text-white w-full">
                                        3
                        </span>
                                </div>
                            </div>
                            <div className="text-xs text-center md:text-base">Comentarios</div>
                        </div>
                        <div className="w-1/4">
                            <div className="relative mb-2">
                                <div className="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
                                    <span className="text-center text-white w-full">
                                        4
                                    </span>
                                </div>
                            </div>

                            <div className="text-xs text-center md:text-base">Confirmación de cita</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-xl w-full space-y-8 p-4 ">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                            Agendar Consulta
                        </h2>
                    </div>
                    <Formik
                        initialValues={{
                            reason: '',
                            booking_date: '',
                            booking_time: '',
                            booking_duration: '',
                            terms: ''
                        }}
                        validationSchema={Yup.object().shape({
                            reason: Yup.string().required('*Este campo es requerido'),
                            booking_date: Yup.string().required('*Este campo es requerido'),
                            booking_time: Yup.string().required('*Este campo es requerido'),
                            booking_duration: Yup.string().required('*Este campo es requerido'),
                            terms: Yup.string().required('*Acepté los terminos para continuar')
                        })}
                        onSubmit={({ reason, booking_date, booking_time, booking_duration }, { setStatus, setSubmitting }) => {
                            let concatDate = moment(booking_date + booking_time, 'YYYY-MM-DD HH:mm:ssZ');
                            let start = concatDate.format('YYYY-MM-DD HH:mm:ss');
                            console.log(start)
                            start = moment(start).tz('America/Tijuana').format('YYYY-MM-DD HH:mm:ss z')
                            console.log("Send date: " + start)
                            setStatus();
                            bookingService.createBooking(reason, start, booking_duration).then(
                                booking => {
                                    // setSubmitting(true);//ADDED TESTING
                                    console.log("Returned date in booking component: " + moment(booking.result.start).format('YYYY-MM-DD HH:mm:ss z'));
                                    setSubmitting(false);
                                    let id = booking.result.id;
                                    // console.log(booking);
                                    history.push({
                                        pathname: '/payment',
                                        state: { id: id }
                                    });
                                    // history.push("/payment");

                                    // history.push("/payment:"{id}); //check how send id
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus({
                                        sent: false,
                                        msg: `Oops! ${error}. Algo salió mal, intenta nuevamente.`
                                    });
                                },
                            );
                            // console.log("REASON::", reason, " DATE::", booking_date, " TIME::", booking_time, " DURATION::", booking_duration, "START::", start)
                        }}
                        render={({ errors, status, touched, isSubmitting, values, handleBlur, handleChange }) => (
                            <Form className="mt-8 space-y-6 ">
                                <div className="-space-y-px">
                                    <div className="p-4">
                                        <label className="block">
                                            <span className="text-gray-900 font-semibold">Motivo de consulta</span>
                                            <select name="reason" className={'block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.reason && touched.reason ? ' border-red-500' : '')}
                                                value={values.reason}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option>Seleccione</option>
                                                {loading ? <option>Cargando...</option> : topics.map((topic, index) => (<option key={index} value={topic.id}>{topic.name}</option>))}
                                            </select>
                                            <ErrorMessage name="reason" component="div" className="italic font-bold font-sans text-red-500" />
                                        </label>
                                    </div>
                                    <div className="p-4">
                                        <label htmlFor="booking_date" className="text-gray-900 font-semibold">Selecciona la fecha de tu preferencia</label>
                                        <input
                                            id="booking_date"
                                            value={values.booking_date}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="booking_date"
                                            type="date"
                                            placeholder="dd-mm-aaaa"
                                            min={moment(new Date()).format("YYYY-MM-DD")}
                                            required
                                            className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.booking_date && touched.booking_date ? ' border-red-500' : '')}
                                        />
                                        <ErrorMessage name="booking_date" component="div" className="italic font-bold font-sans text-red-500" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="p-4 col-span-1">
                                            <label htmlFor="booking_time" className="text-gray-900 font-semibold">Elige un horario</label>
                                            <input
                                                id="booking_time"
                                                name="booking_time"
                                                type="time"
                                                step="600"
                                                required
                                                placeholder="hh-mm"
                                                value={values.booking_time}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={'relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.booking_time && touched.booking_time ? ' border-red-500' : '')}
                                            />
                                            <ErrorMessage name="booking_time" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>
                                        <div className="p-4 col-span-1">
                                            <label className="block">
                                                <span className="text-gray-900 font-semibold">Duración (Minutos)</span>
                                                <select
                                                    id="booking_duration"
                                                    value={values.booking_duration}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="booking_duration"
                                                    type="date"
                                                    required
                                                    placeholder="60"
                                                    className={'block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.booking_duration && touched.booking_duration ? ' border-red-500' : '')}
                                                >
                                                    <option>Seleccione</option>
                                                    <option value="15">15 mins</option>
                                                    <option value="30">30 mins</option>
                                                    <option value="45">45 mins</option>
                                                    <option value="60">1 hora</option>
                                                    <option value="75">1 hora 15 mins</option>
                                                    <option value="90">1 hora 30 mins</option>
                                                    <option value="105">1 hora 45 mins</option>
                                                    <option value="120">2 horas</option>
                                                </select>
                                                <ErrorMessage name="booking_duration" component="div" className="italic font-bold font-sans text-red-500" />
                                            </label>
                                        </div>

                                        {status && status.msg && (
                                            <div className="p-4 col-span-1 md:col-span-2">
                                                <p className={`text-center italic font-bold font-sans col-span-2 p-2 ${status.sent ? "text-gray-900" : "text-red-500"}`}>
                                                    {status.msg}
                                                </p>
                                            </div>
                                        )}
                                        {isSubmitting &&
                                            <div className="flex justify-around p-4 col-span-1 md:col-span-2">
                                                <div className="inline-flex rounded-md">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gary-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                </div>
                                            </div>}
                                        <div className="mx-5 my-1 col-span-2">
                                            <p className="text-red-400 text-xs mb-2">Nota: Todas las citas están sujetas a disponibilidad de nuestros asesores</p>
                                        </div>
                                        <div className="col-span-2 p-4">
                                            {/* <TermsConditions /> */}
                                            <Field type="checkbox" id="terms" name="terms" className="form-checkbox text-indigo-600" />
                                            <label htmlFor="terms">
                                                <span className="m-1 text-sm">Acepto los <Link
                                                    // href="/terms"
                                                    // target="popup"
                                                    to="/#"
                                                    onClick={() => window.open('/terms', 'popup', 'width=600,height=600')}
                                                    className="text-black font-bold font-sans"
                                                >Términos y Condiciones</Link> y <Link
                                                    // href="/privacity"
                                                    // target="popup"
                                                    to="/#"
                                                    onClick={() => window.open('/privacity', 'popup', 'width=600,height=600')}
                                                    className="text-black font-bold font-sans"
                                                >Aviso de privacidad</Link>
                                                </span>
                                            </label>
                                            <ErrorMessage name="terms" component="div" className="italic font-bold font-sans text-red-500" />
                                        </div>
                                        <div className="p-4 col-span-">
                                            <button className="w-full text-gray-300" disabled>Regresar</button>
                                        </div>
                                        <div className="p-4 col-span-1">
                                            <button type="submit" disabled={isSubmitting} className="group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Continuar</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    />
                </div>
            </div>
        </Fragment>
    )
}