import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Navbar } from '@/Components'
import Logo from '@/Assets/img/pbh_2.png'
import PrfileIcon from '@/Assets/img/icons/profile.svg'
import { Date } from '@/Components'
import { Name } from '@/Components'
import { bookingService } from '@/Services'
import moment from 'moment'
import { array } from 'yup'
import { Link } from 'react-router-dom'
import CalendarIcon from '@/Assets/img/icons/calendar.svg'
import { userService } from '../Services/user.service'

export const MyDates = (props) => {

    const [bookings, setBookings] = useState({})
    const [openModal, setOpenModal] = useState(true);
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({});
    const [loadingUser, setLoadingUser] = useState(true)
    let is_lawyer;
    moment.locale('es')
    let currentDate = moment().format();
    let newBookings = [];
    let oldBookings = [];

    const handleModal = () => {
        setOpenModal(!openModal)
    }

     function getBookings() {
        bookingService.getBookings()
            .then(bookings => {
                setBookings(bookings)
                setLoading(false);
            })
            .catch(err => console.log(err))

    }
    function oldOrNewDate(bookings, currentD) {
        let date;
        bookings.map((element) => {
            date = moment(element.start).format();
            if (!moment(date).isSameOrAfter(currentD)) {
                oldBookings.push(element);
            } else {
                newBookings.push(element);
            }
        })
    }

    if (!loading) oldOrNewDate(bookings, currentDate);

    if (!loading) console.log(newBookings, oldBookings);
    const [close, setClose] = React.useState(props.isClose);
    useEffect(() => {
        getBookings();
        userService.getUser()
            .then((user) => {
                setUser(user.user)
                setLoadingUser(false)
            }
            );
    }, []);
    if (!loadingUser) {
        is_lawyer = user.is_lawyer;


    }


    return (
        <Fragment>
            {
                bookings
                    ?
                    <></>
                    :
                    <dialog open className={`${openModal ? 'block' : 'hidden'} bg-gray-500 bg-opacity-70 my-auto z-10 w-screen h-screen text-black flex items-center justify-center`}>
                        <div className="bg-white w-3/4 h-2/4 md:w-3/4 mx-auto my-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 p-5 md:p-20">
                                <div className="p-4 col-span-1">
                                    <label for="nationality" className="text-gray-900 font-semibold">Cliente anterior o nuevo cliente</label>
                                    <input id="nationality" name="nationality" type="text" required className="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
                                </div>
                                <div className="p-4 col-span-1">
                                    <label for="nationality" className="text-gray-900 font-semibold">¿Cómo se enteró de nosotros?*</label>
                                    <label className="block">
                                        <select className="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                            <option>Lorem ipsum</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="p-4 col-span-1 md:col-span-2">
                                    <div className="block">
                                        <span className="text-gray-900 uppercase font-semibold">Declaración</span>
                                        <div className="mt-2">
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox text-indigo-600" checked />
                                                    <span className="ml-2 text-gray-900">Declaro que la información contenida en este formulario es verdadera, completa y proporciona la información de modo confiable y actualizada sobre todos los aspectos sobre los cuales se han hecho preguntas.</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleModal} className="my-0 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-gray-100 bg-gray-900  hover:bg-black">cerrar</button>
                        </div>
                    </dialog>

            }


            <Navbar is_lawyer={is_lawyer} logo={Logo} />

            <div className="mb-4 mx-2 sm:mx-8">

                <Name />
                <div className="space-x-4 flex h-14 inline-block">
                    <div className="justify-center mb-auto mt-auto">
                        <h2 className="text-3xl font-semibold text-gray-900">Mis citas</h2>
                    </div>
                </div>
                <div className="space-x-4 flex h-14 inline-block flex-row flex-row mb-7">
                    <div className="flex-grow-0 mt-auto">
                        <h3>Próximas citas</h3>
                    </div>
                    <div className="flex-grow h-0.5 bg-gray-300 mt-auto m-2"></div>
                </div>
                {
                    bookings
                        ?
                        <>
                            {
                                loading
                                    ? <Date />
                                    : newBookings.map((element, index) => {
                                        let id = element.id;
                                        let topic = element.topic_name;
                                        let date = moment(element.start).format('dddd Do MMMM YYYY');
                                        let attendees = element.attendees;
                                        let attendees_name;
                                        attendees_name = attendees.map((element) => element.user_name);
                                        // console.log(attendees_name[0])
                                        return <Date
                                            key={index}
                                            id={id}
                                            topic={topic}
                                            date={date}
                                            attendees={attendees_name}
                                            is_lawyer = {is_lawyer}
                                        />
                                    })
                            }
                        </>
                        :
                        <>
                            <div className="w-full ">
                                <img className="mx-auto w-15 h-15 m-1" src={CalendarIcon} />
                                <p className="text-center m-1 ">
                                    No hay citas proximas agendadas
                                </p>
                                <p className="text-center">
                                    ¿Quieres agendar una cita?
                                    <Link
                                        className="m-1 text-blue-700"
                                        to="/booking">
                                        Agendar cita
                                    </Link>
                                </p>
                            </div>
                        </>
                }
                <div className="space-x-4 flex h-14 inline-block flex-row mb-7">
                    <div className="flex-grow-0 mt-auto">
                        <h3>Citas pasadas</h3>
                    </div>

                    <div className="flex-grow h-0.5 bg-gray-300 mt-auto m-2"></div>
                </div>
                {
                    loading
                        ? <Date />
                        : oldBookings.map((element, index) => {
                            let id = element.id;
                            let topic = element.topic_name;
                            let date = moment(element.start).format('dddd Do MMMM YYYY');
                            let attendees = element.attendees;
                            let attendees_name;
                            attendees_name = attendees.map((element) => element.user_name);
                            // console.log(attendees_name[0])
                            return <Date
                                key={index}
                                id={id}
                                topic={topic}
                                date={date}
                                attendees={attendees_name}
                                is_lawyer = {is_lawyer}
                            />
                        })
                }
            </div>


        </Fragment>
    )
}

