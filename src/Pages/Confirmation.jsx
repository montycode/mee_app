import React, { Fragment, useState, useEffect } from 'react'
import { Navbar } from '@/Components'
import Logo from '@/Assets/img/pbh_2.png'
import CalendarIcon from '@/Assets/img/icons/calendar.svg'
import { Link } from 'react-router-dom'
import { DateDetails } from '@/Components'
import { useLocation } from 'react-router-dom';
import { bookingService } from '@/Services'
// import { booking_data } from '../Services/booking.service';
import moment from 'moment'

export const Confirmation = () => {


    const [singleBooking, setBooking] = useState({})
    const [loading, setLoading] = useState(true)
    const { state } = useLocation();
    let booking_id = state.id;
    let attendees = singleBooking.attendees;
    let attendees_name;
    let email;

    async function getBooking(id) {
        bookingService.getSingleBooking(id)
            .then(booking => {
                setBooking(booking)
                setLoading(false);
                console.log(booking);
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getBooking(booking_id);
    }, []);

    if (!loading) {
        attendees.map((element) => {
            attendees_name = element.user_name;
        })
    }
    if (!loading) console.log(singleBooking);
    // const datos = booking_data;
    // moment.locale('es')
    // console.log(datos);
    // let startDateAndTime = datos.start;
    // let endtDateAndTime = datos.end;
    // let startDate = moment(startDateAndTime).format('dddd Do MMMM YYYY');
    // let endtDate = moment(endtDateAndTime).format('dddd Do MMMM YYYY');
    // let start_time = moment(startDateAndTime).format('h:mm');
    // let end_time = moment(endtDateAndTime).format('h:mm');
    // let duration = moment(end_time).subtract(start_time);
    console.log("Consulted date in confirmation component: " + moment(singleBooking.star).format('YYYY-MM-DD HH:mm:ss z'));
    return (
        <div>
            <div className="w-full bg-gray-100">
                <div className="p-4">
                    <Navbar logo={Logo} />
                    <div className="flex md:p-10">
                        <div className="w-1/4">
                            <div className="relative mb-2">
                                <div className="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
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
                            <div className="text-xs text-center md:text-base">Agendar Consulta</div>
                        </div>
                        <div className="w-1/4">
                            <div className="relative mb-2">
                                <div className="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
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
            <div className="container w-4/4 p-2 m-2 md:w-3/4 lg:w-8/12 xl:w-5/12 h-1/2 shadow-2xl p-14 mx-auto mt-8 ">
                <div className="container">
                    <img className="mx-auto w-4/12 h-4/12" src={CalendarIcon} />
                </div>
                <div className="divide-y-4 divide-black divide-solid">
                    <div className="text-center m-6">
                        <h1>Confirmación de la cita</h1>
                        <p>Te hemos enviado un correo de confirmación a: <span className="text-blue-700 ">{singleBooking.user_email}</span></p>
                    </div>
                    <DateDetails
                        id={singleBooking.id}
                        // name={}
                        topic={singleBooking.topic_name}
                        start={singleBooking.start}
                        end={singleBooking.end}
                        attendees={attendees_name}
                        name={singleBooking.user_name}
                        // email={singleBooking.user_email}
                        // time={singleBooking.start}
                        // duration={2}
                        // attendees={singleBooking.attendees[0].user_name}
                        confirmation={true}
                        link={singleBooking.zoom_link}
                    />
                </div>
                <div className="mb-2">
                    <p className="pb-2 text-center font-semibold text-gray-600 mt-2">Nota: Cambios en la Agenda se podrán realizar hasta 24 horas antes de la fecha seleccionada. Cambios en Abogado se podránn realizar hasta 4 horas antes de la hora seleccionada.</p>
                </div>
                <Link to='/dates' className="mt-2 p-8 p-x-10 group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">IR A MIS CITAS</Link>
            </div>

        </div>


    )
}
