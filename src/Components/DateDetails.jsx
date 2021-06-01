import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
// import { booking_data } from '../Services/booking.service';
import { bookingService } from '@/Services'
import Zoom from '../Assets/img/icons/zoom.svg'
import moment from 'moment'
import Profile from '@/Assets/img/icons/icn_profile.svg'


export const DateDetails = ({ id, topic, start, end, attendees, name, link, is_lawyer, confirmation }) => {


    moment.locale('es')

    let startDateAndTime = start;
    let startDate = moment(startDateAndTime).format('dddd Do MMMM YYYY');
    let start_time = moment(startDateAndTime).format('HH:mm');
    let endtDateAndTime = end;
    let end_time = moment(endtDateAndTime).format('HH:mm');
    let valuestart = moment.duration(start_time);
    let valuestop = moment.duration(end_time);
    let difference = valuestop.subtract(valuestart);
    let minutes = difference.minutes();
    let hours = difference.hours();
    let hours_str = hours == 1 ? "hora" : "horas";
    let minutes_str = minutes == 1 ? "minuto" : "minutos";
    let blank_space = " ";



    return (
        <>
            {is_lawyer
                ?
                <>
                    <div className="container w-full text-left">
                        <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans text-xl mb-2 text-white">Motivo: </p><p className=" inline-block mx-1 font-bold text-white lg:truncate">{topic}</p>
                        </div>
                        {/* <h2 className="text-black font-bold font-sans my-2 inline-block w-1/2">Tema Asignado</h2> */}
                        <div className="block md:float-left w-1/4 h-full my-auto">
                            <img className="w-16 h-16 mx-auto my-auto" src={Profile} />
                        </div>
                        <div className="block md:inline-block w-3/4">
                            <div className="block">
                                <p className="inline-block mx-1 font-bold font-sans text-white">Nombre del Cliente: </p><p className="inline-block mx-1 text-white"> {name}</p>
                            </div>
                            <div className="block">
                                <p className="inline-block mx-1 font-bold font-sans text-white">No. de la cita(ID): </p><p className="text-white inline-block mx-1">{id}</p>
                            </div>
                            <h2 className="text-black font-bold font-sans mt-6 mb-2 inline-block text-xl text-white">Detalles de la cita</h2>
                            <div className="block">
                                <p className="inline-block mx-1 font-bold font-sans text-white">Fecha: </p><p className="inline-block mx-1 text-white"> {startDate}</p>
                            </div>
                            <div className="block">
                                <p className="inline-block mx-1 font-bold font-sans text-white">Hora: </p><p className="inline-block mx-1 text-white"> {start_time}</p>
                            </div>
                            <div className="block">
                                <p className="inline-block mx-1 font-bold font-sans text-white">Duración: </p><p className="inline-block mx-1 text-white"> {hours} {hours_str} {minutes} {minutes_str}</p>
                            </div>
                        </div>
                        {/* <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans">Abogado Asignado: </p><p className="inline-block mx-1"> {attendees}</p>
                        </div> */}
                    </div>
                </>
                :
                <>
                    <div className="container w-full text-left">
                        <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans text-xl mb-2">Motivo:</p><p className="inline-block mx-1 font-bold"> {topic}</p>
                        </div>
                        {/* <h2 className="text-black font-bold font-sans my-2 inline-block w-1/2">Tema Asignado</h2> */}
                        <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans">No. de la cita(ID): </p><p className="inline-block mx-1">{id}</p>
                        </div>
                        <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans">Nombre: </p><p className="inline-block mx-1"> {name}</p>
                        </div>
                        <h2 className="text-black font-bold font-sans mt-6 mb-2 inline-block w-1/2  text-xl">Detalles de la cita</h2>
                        <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans">Fecha: </p><p className="inline-block mx-1"> {startDate}</p>
                        </div>
                        <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans">Hora: </p><p className="inline-block mx-1"> {start_time}</p>
                        </div>
                        <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans mb-14">Duración: </p><p className="inline-block mx-1"> {hours} {hours_str} {minutes} {minutes_str}</p>
                        </div>
                        {/* <div className="block">
                            <p className="inline-block mx-1 font-bold font-sans">Abogado Asignado: </p><p className="inline-block mx-1"> {attendees}</p>
                        </div> */}
                        {/* {confirmation
                            ?
                            <>
                                <div className={`inline-block w-full md:w-1/4 xl:w-5/12`}>
                                    <p className="blockinline-block  mx-1  font-bold font-sans my-auto w-full">Acceso a reunion: </p>
                                </div>
                                <div className="w-4/4 block md:inline-block md:w-3/4 lg:w-4/4 xl:w-6/12">
                                    <div className="w-full h-full block md:inline-block text-white md:w-3/4 lg:w-3/4 xl:w-full bg-blue-700 p-1">
                                        <a target="_blank" rel="noopener noreferrer" href={link}>
                                            <div className="w-full h-4/4 block box-content">
                                                <img className="mx-auto w-full md:w-2/12 my-auto block  md:inline-block w-6 h-6" src={Zoom} />
                                                <p className="w-4/4 my-auto block md:inline-block md:w-10/12 text-center box-content">Aceder a la reunion</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            </>
                        } */}
                    </div>
                </>
            }


        </>
    )
}
