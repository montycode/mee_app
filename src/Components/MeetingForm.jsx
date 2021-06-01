import React, { useState, useEffect, useRef } from 'react'
import { userService } from '../Services/user.service'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { topicService } from '@/Services'
import * as moment from 'moment';
import { bookingService } from '@/Services'
import Swal from 'sweetalert2'

export const MeetingForm = ({sendEdit, is_lawyer}) => {
    const [topics, setTopics] = useState({})
    const [loading, setLoading] = useState(true)
    const [edit, setEdit] = useState(true)
    const formRef = useRef(null)
    

    useEffect(() => {
        topicService.getTopics()
            .then(topics => {
                setTopics(topics)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);

    function handleSendRequest(){
        formRef.current.scrollIntoView() //redirect to form view
        // if(sometring){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Has solicitado cambios en tu cita',
            showConfirmButton: false,
            timer: 1500
          })
          setEdit(false)
        // }
    } 
    function handleCancel() {
        setEdit(false)
    }
    sendEdit(edit)

    return (
        <Formik id='my-form'
            enableReinitialize
            initialValues={{
                reason: '',
                booking_date: '',
                booking_time: '',
            }}
            validationSchema={Yup.object().shape({
                reason: Yup.string().required('*Este campo es requerido'),
                booking_date: Yup.string().required('*Este campo es requerido'),
                booking_time: Yup.string().required('*Este campo es requerido'),
            })}
            className="mt-8 space-y-6 md:p-10"
            method="PUT"
            onSubmit={({ reason, booking_date, booking_time }, { setStatus, setSubmitting }) => {
                let concatDate = moment(booking_date + booking_time, 'YYYY-MM-DD HH:mm:ssZ');
                let start = concatDate.format('YYYY-MM-DD HH:mm:ss');
                console.log(start)
                start = moment(start).tz('America/Tijuana').format('YYYY-MM-DD HH:mm:ss z')
                console.log("Send date: " + start)
                setStatus();
                // bookingService.updateBooking(reason, start, booking_time).then(
                //     booking => {
                //         // setSubmitting(true);//ADDED TESTING
                //         console.log("Returned date in booking component: " + moment(booking.result.start).format('YYYY-MM-DD HH:mm:ss z'));
                //         setSubmitting(false);
                //         let id = booking.result.id;
                //         // console.log(booking);
                //         history.push({
                //             pathname: '/date',
                //             state: { id: id }
                //         });
                //         // history.push("/payment");

                //         // history.push("/payment:"{id}); //check how send id
                //     },
                //     error => {
                //         setSubmitting(false);
                //         setStatus({
                //             sent: false,
                //             msg: `Oops! ${error}. Algo salió mal, intenta nuevamente.`
                //         });
                //     },
                // );
            }}
            render={({ errors, status, touched, isSubmitting, values, handleBlur, handleChange }) => (
                <Form id='my-form' className="mt-8 space-y-6 ">
                    <div ref={formRef}  className="-space-y-px">
                        <h2 className={`${is_lawyer ? "text-white" : "text-black"} font-bold font-sans my-2 inline-block w-1/2`}>Tema Asignado</h2>
                        <div className="grid grid-cols-1">
                            <div className="p-4">
                                <label className="block">
                                    <span className={`${is_lawyer ? "text-white" : "text-black"} font-semibold`}>Motivo de consulta</span>
                                    <select name="reason" className={'block w-full p-2 border bg-gray-200 border-2 border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.reason && touched.reason ? ' border-red-500' : '')}
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
                            <h2 className={`${is_lawyer ? "text-white" : "text-black"} font-bold font-sans my-2 inline-block w-1/2`}>Detalles de la cita</h2>
                            <div className="p-4">
                                <label htmlFor="booking_date" className={`${is_lawyer ? "text-white" : "text-black"} font-semibold truncate`}>Seleccionar fecha</label>
                                <Field
                                    id="booking_date"
                                    // value={values.booking_date}
                                    // onChange={handleChange}
                                    // onBlur={handleBlur}
                                    name="booking_date"
                                    type="date"
                                    // min={moment(new Date()).format("YYYY-MM-DD")}
                                    required
                                    className={'relative block w-full p-2 border bg-gray-200 border-2 border-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.booking_date && touched.booking_date ? ' border-red-500' : '')}
                                />
                                <ErrorMessage name="booking_date" component="div" className="italic font-bold font-sans text-red-500" />
                            </div>
                            <div className="p-4 col-span-1">
                                <label htmlFor="booking_time" className={`${is_lawyer ? "text-white" : "text-black"} font-semibold`}>Elige un horario</label>
                                <Field
                                    id="booking_time"
                                    name="booking_time"
                                    type="time"
                                    step="600"
                                    required
                                    // value={values.booking_time}
                                    // onChange={handleChange}
                                    // onBlur={handleBlur}
                                    className={'relative block w-full border-2 border-black p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm' + (errors.booking_time && touched.booking_time ? ' border-red-500' : '')}
                                />
                                <ErrorMessage name="booking_time" component="div" className="italic font-bold font-sans text-red-500" />

                            </div>
                            <div className="my-1 block box-contend lg:p-2  lg:inline-block w-2/2 h-2/2 lg:w-3/4 ">
                                    <button
                                        onClick={handleSendRequest}
                                        type="submit"
                                        className={`${is_lawyer ? "bg-white hover:bg-gray-200 text-black" : "bg-black hover:bg-gray-800 text-white"} w-full h-7  hover:bg-gray-800 lg:h-7 box-contentd border-2 border-black p-1`}>
                                        <p className="text-xs mx-auto my-auto w-full h-full">ENVIAR SOLICITUD DE CAMBIOS</p>
                                    </button>
                                </div>
                                <div className="my-1 block box-contend lg:p-2  lg:inline-block w-2/2 h-2/2 lg:w-3/4 ">
                                    <button
                                        onClick={handleCancel}
                                        className="w-full h-7 text-black bg-white hover:bg-gray-300 lg:h-7 box-contentd border-2 border-black p-1">
                                        <p className="text-xs mx-auto my-auto w-full h-full">CANCELAR</p>
                                    </button>
                                </div>
                        </div>
                    </div>
                </Form >
            )}
        />
    );
}