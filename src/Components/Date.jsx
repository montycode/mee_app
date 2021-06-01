import React, { Fragment, useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { userService } from '../Services/user.service'
// import { booking_data } from '../Services/booking.service';
import { bookingService } from '@/Services'
import moment from 'moment'
import { array } from 'yup';

export const Date = ({ topic, date, id, attendees, is_lawyer }) => {

    // let dates = [];
    // loading ? <strong>Cargando...</strong> : bookings.map((booking) => dates.push(booking.start));
    // loading ? console.log("ESPERA") : console.log(dates);
    // console.log(JSON.stringify(bookings[0].id))
    // moment.locale('es')
    // const datos = booking_data;
    // let dateAndTime = datos.start;
    // let date = moment(dateAndTime).format('dddd Do MMMM YYYY');
    // console.log(topic, date)
    // const [user, setUser] = useState({});
    // const [loading, setLoading] = useState(true)
    // let is_lawyer;

    // useEffect(() => {
    //     userService.getUser()
    //         .then((user) => {
    //             setUser(user.user)
    //             setLoading(false)
    //         }
    //         );
    // }, []);
    // if (!loading) {
    //     is_lawyer = user.is_lawyer;


    // }





    return (
        <>
            {is_lawyer
                ? <Link to={{ pathname: '/date-lawyer', state: { id, is_lawyer } }} className="">
                    <div className="bg-gray-200 p-10 box-contend border-4 w-full md:text-center lg:w-1/2 lg:text-left xl:w-1/3 border-gray-50 inline-block flex-row">
                        <h2 className="text-black font-bold font-sans my-2 truncate">Tema Asignado:  {!date && topic ? 'cargando' : topic}</h2>
                        <p className="truncate">{is_lawyer ? "Cliente: " : "Abogado asignado: "} {!date && topic ? 'cargando' : attendees}</p>
                        <p className="truncate">Fecha:  {!date && topic ? 'cargando' : date}</p>
                        <p className="text-black font-bold font-sans my-2">Ver detalles </p>
                    </div>
                </Link>
                : <Link to={{ pathname: '/date', state: { id, is_lawyer } }} className="">
                    <div className="bg-gray-200 p-10 box-contend border-4 w-full md:text-center lg:w-1/2 lg:text-left xl:w-1/3 border-gray-50 inline-block flex-row">
                        <h2 className="text-black font-bold font-sans my-2 truncate">Tema Asignado:  {!date && topic ? 'cargando' : topic}</h2>
                        <p className="truncate">{is_lawyer ? "Cliente: " : "Abogado asignado: "} {!date && topic ? 'cargando' : attendees}</p>
                        <p className="truncate">Fecha:  {!date && topic ? 'cargando' : date}</p>
                        <p className="text-black font-bold font-sans my-2">Ver detalles </p>
                    </div>
                </Link>
            }

        </>
    )

}