import React, { Fragment, useState, useEffect } from 'react'
import { DateDetails } from '@/Components'
import { File } from '@/Components'
import { Navbar } from '@/Components'
import Logo from '@/Assets/img/pbh_2.png'
import PrfileIcon from '@/Assets/img/icons/profile.svg'
import Arrow from '@/Assets/img/icons/icn_arrow.svg'
import { useLocation } from 'react-router-dom';
import { bookingService } from '@/Services'
import Profile from '@/Assets/img/icons/icn_profile.svg'
import { Name } from '@/Components'
import { MeetingForm } from '@/Components'
import Whatsapp from '@/Assets/img/icons/whatsapp.svg'
import Mail from '@/Assets/img/icons/correo.svg'
import Phone from '@/Assets/img/icons/telefono.svg'
import Swal from 'sweetalert2'
import moment from 'moment'
import MediaQuery from 'react-responsive'
import Zoom from '../Assets/img/icons/zoom.svg'
import Config_Withe from '@/Assets/img/icons/config-white.svg'

export const MeetingLawyer = () => {

    const [singleBooking, setBooking] = useState({})
    const [loading, setLoading] = useState(true)
    const [edit, setEdit] = useState(false)
    const { state } = useLocation();
    let is_lawyer = state.is_lawyer;
    let booking_id = state.id;
    let attendees = singleBooking.attendees;
    let attendees_name;
    let topic = singleBooking.topic_name;
    let currentDate;
    let subtract;
    let oneDayFlag = true;

    async function getBooking(id) {
        bookingService.getSingleBooking(id)
            .then(booking => {
                setBooking(booking)
                setLoading(false);
                // console.log(booking);
            })
            .catch(err => console.log(err))
    }

    if (!loading) {
        currentDate = moment().format();
        // subtract = moment(currentDate).subtract(singleBooking.start).format("HH:mm:ss")
        // console.log(currentDate, " - ", subtract, " - ", singleBooking.start)
        // moment.duration(start.diff(end)).asDays()
        let result = moment(singleBooking.start).diff(currentDate, "hours");
        // console.log(result)
        if (result > 24) oneDayFlag = false

        attendees.map((element) => {
            attendees_name = element.user_name;
        })
    }
    let files = [
        { name: "Acta de Nacimiento" },
        { name: "Otro Archivo" },
        { name: "Nombre archivo 3" },
        { name: "Nombre archivo 4" },
        { name: "Nombre archivo 5" },
        { name: "Nombre archivo 6" }
    ];
    // console.log(files.map((elenment, index) => {
    //     let resultado = elenment.name;
    //     return resultado
    //     }
    // ));
    function handleEdit() {
        setEdit(true)
    }
    function handleCancel() {
        setEdit(false)
    }
    function getEdit(val) {
        setEdit(val);
        // do not forget to bind getData in constructor
        // console.log("EDDIT " + val);
    }


    useEffect(() => {
        getBooking(booking_id);
    }, []);
    if (!loading) console.log(singleBooking);
    // if (!loading) console.log("inicio " + singleBooking.start, " final " + singleBooking.end, )
    return (
        <Fragment>

            <div className="w-full h-full p-3 box-contend ">
                <Navbar is_lawyer={is_lawyer} logo={Logo} />
                <div className=" mx-6 ">
                    <Name />
                    <div className="space-x-4 flex h-14 inline-block w:4/4">
                        <div className="justify-center mb-auto mt-auto">
                            <h2 className="text-sm md:text-base lg:text-3xl font-semibold text-gray-400">Mis citas abogado</h2>
                        </div>
                        <div className="mb-auto mt-auto">
                            <img className="w-10 h-10" src={Arrow} />
                        </div>
                        <div className="justify-center mb-auto mt-auto">
                            <h2 className="text-sm md:text-base lg:text-3xl font-semibold text-gray-1000">{edit ? "Solicitud de cambios" : topic}</h2>
                        </div>
                    </div>
                </div>
                <div className={`w-4/4 lg:w-11/12 xl:w-10/12 mx-auto flex flex-col lg:flex-row h-full box-border`}>
                    <div className={`container flex-wrap content-between my-4 w-11/12 md:w-11/12 h-full mx-auto lg:mx-2 lg:w-6/12 box-border`}>
                        <button
                            className={`float-right`}
                            onClick={handleEdit}
                        >
                            <img className="w-5 h-5 m-5" src={Config_Withe} />
                        </button>
                        <div className={`h-120 p-6 md:p-8 bg-black text-white lg:p-16 container p-2 w-full  mx-auto `}>
                            {!edit
                                ? <>
                                    <DateDetails is_lawyer={is_lawyer}
                                        id={singleBooking.id}
                                        // name={}
                                        topic={singleBooking.topic_name}
                                        start={singleBooking.start}
                                        end={singleBooking.end}
                                        attendees={attendees_name}
                                        name={singleBooking.user_name}
                                        // time={singleBooking.start}
                                        // duration={2}
                                        // attendees={singleBooking.attendees[0].user_name}

                                        link={singleBooking.zoom_link}
                                    />
                                </>
                                : <>
                                    <MeetingForm sendEdit={getEdit} is_lawyer={true} />
                                </>
                            }
                        </div>
                        <div className={`${edit ? "opacity-25 pointer-events-none " : ""} bg-blue-600 w-full p-3 mb-4 box-border  block lg:hidden `}>
                            <a target="_blank" rel="noopener noreferrer" href={singleBooking.zoom_link}>
                                <div className="w-full h-4/4 block box-content">
                                    <img className="w-full md:w-2/12 my-auto block md:inline-block w-6 h-6" src={Zoom} />
                                    <p className="w-4/4 my-auto block md:inline-block md:w-10/12 text-center lg:text-left box-content text-white ">Aceder a la reunion</p>
                                </div>
                            </a>
                        </div>
                        <div className={`${edit ? "pointer-events-none " : ""} bg-blue-600 w-full p-2 box-border h-16 hidden lg:block box-border`}>
                            <a target="_blank" rel="noopener noreferrer" href={singleBooking.zoom_link}>
                                <div className="w-full   h-4/4 block box-content mx-auto">
                                    <div className="w-4/4 md:w-4/12  md:inline-block  my-auto">
                                        <img className="w-10 h-10 float-right mx-4 mt-1" src={Zoom} />
                                    </div>
                                    <div className="w-4/4 block md:inline-block md:w-8/12 box-content">
                                        <p className=" text-white text-2xl font-bold float-left">Iniciar la reunión</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className={`${edit ? "opacity-25 pointer-events-none " : ""} container flex-wrap content-between lg:my-4 w-11/12 md:w-11/12 h-full mx-auto lg:mx-2 lg:w-6/12 box-border`}>
                        <div className="p-6 md:p-6 lg:p-8 bg-gray-200  h-90 container mx-2  w-4/4  mx-auto block  mb-4">
                            <div className="p-3">
                                <p className="text-black font-bold font-sans  text-xl">Documentos de la cita</p>
                                <p className="text-black font-sans mb-8">Si desea descargar los documentos adjuntos de click en la flecha.</p>
                                {
                                    files.map((element, index) => <File is_lawyer={is_lawyer} edit={edit} key={index} nombre={element.name} />)
                                }
                            </div>
                        </div>
                        <div className="p-6 md:p-8 lg:p-12 bg-gray-200   container mx-2  w-4/4 h-3/4 xl:h-2/3 mx-auto block  mb-5">
                            <h2 className="text-lg bold font-black mb-2">Comentarios del cliente</h2>
                            <p className="text-sm">{singleBooking.brief}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
