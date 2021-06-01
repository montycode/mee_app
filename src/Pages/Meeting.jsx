import React, { Fragment, useState, useEffect, useRef } from 'react'
import { DateDetails } from '@/Components'
import { File } from '@/Components'
import { Navbar } from '@/Components'
import Logo from '@/Assets/img/pbh_2.png'
import Arrow from '@/Assets/img/icons/icn_arrow.svg'
import { useLocation } from 'react-router-dom';
import { bookingService } from '@/Services'
import Profile from '@/Assets/img/icons/icn_profile.svg'
import Config from '@/Assets/img/icons/config.svg'
import Config_Withe from '@/Assets/img/icons/config-white.svg'
import { Name } from '@/Components'
import { MeetingForm, Footer } from '@/Components'
import Whatsapp from '@/Assets/img/icons/whatsapp.svg'
import Mail from '@/Assets/img/icons/correo.svg'
import Phone from '@/Assets/img/icons/telefono.svg'
import Swal from 'sweetalert2'
import moment from 'moment'
import MediaQuery from 'react-responsive'
import Zoom from '../Assets/img/icons/zoom.svg'
import ArrowDonwBlack from '@/Assets/img/icons/arrow-down-black.svg'

export const Meeting = () => {

    const [singleBooking, setBooking] = useState({})
    const [loading, setLoading] = useState(true)
    const [edit, setEdit] = useState(false)
    const [editLawyer, setEditLawyer] = useState(false)
    const [editComent, setEditComent] = useState(false)
    const [colapseDoc, setColapseDoct] = useState(false)
    const [colapseComent, setColapseComent] = useState(false)
    const [empty, setEmpty] = useState(true)
    const [brief, setBrief] = useState()
    const [submit, setSubmit] = useState(false)
    const formRef = useRef(null)
    const { state } = useLocation();
    let booking_id = state.id;
    let is_lawyer = state.is_lawyer;
    let attendees = singleBooking.attendees;
    let attendees_name;
    let topic = singleBooking.topic_name;
    let currentDate;
    let subtract;
    let oneDayFlag = true;

    // const [is_lawyer, set_is_lawyer] = useState(false)
    function getBooking(id) {
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
    function handleColapseDoc() {
        setColapseDoct(true);
        if (colapseDoc) setColapseDoct(false);
    }
    function handleColapseComent() {
        setColapseComent(true);
        if (colapseComent) setColapseComent(false);
    }
    function handleEdit() {
        formRef.current.scrollIntoView() //redirect to form view
        // window.scrollTo(0, 0);
        setEdit(true)
    }
    function handleEditLawyer() {
        formRef.current.scrollIntoView() //redirect to form view
        // window.scrollTo(0, 0);
        setEditLawyer(true)
    }
    function handleEditComent() {
        setEditComent(true)
    }
    function handleComentChange(e) {
        setBrief(e.target.value);
        setEmpty(false)
    }
    function cancelComent() {
        setEditComent(false)
    }
    function updateComent() {
        console.log(booking_id, brief);
        bookingService.updateBookingBrief(booking_id, brief).then(
            booking => {
                // setSubmitting(true);//ADDED TESTING
                // setSubmitting(false);
                // console.log(booking)
                getBooking(booking_id);
                setEditComent(false)
                history.push({
                    pathname: '/confirmation',
                    state: { id: booking_id }
                });
            },
            error => {
                // setSubmitting(false);
                // setStatus({
                //     sent: false,
                //     msg: `Oops! ${error}. Algo salió mal, intenta nuevamente.`
                // });
            },
        );
    }
    function handleCancel() {
        // window.scrollTo(0, 0);
        setEditLawyer(false)
    }


    function requestLawyerChange() {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Estas solicitando un cambio de abogado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No!',
        }).then((result) => {
            //call lawyer change function from service
            if (result.isConfirmed /* && function.result */) {
                Swal.fire(
                    'Realizado',
                    'Has solicitado el cambio de abogado.',
                    'success'
                )
                setEditLawyer(false);
            }
        })
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
    // const hanndleValue = (value) => {    
    //     set_is_lawyer(value)
    // }
    console.log(is_lawyer)
    return (
        <Fragment>

            <div className="w-full full p-3 box-contend ">
                <Navbar is_lawyer={is_lawyer} logo={Logo} />
                <div className=" mx-6 ">
                    <Name />
                    <div className="space-x-4 flex h-14 inline-block w:4/4">
                        <div className="justify-center mb-auto mt-auto">
                            <h2 className="text-sm md:text-base lg:text-3xl font-semibold text-gray-400">Mis citas</h2>
                        </div>
                        <div className="mb-auto mt-auto">
                            <img className="w-10 h-10" src={Arrow} />
                        </div>
                        <div className="justify-center mb-auto mt-auto">
                            <h2 className="text-sm md:text-base lg:text-3xl font-semibold text-gray-1000">{edit ? "Solicitud de cambios" : topic}</h2>
                        </div>
                    </div>
                </div>
                <div className={`w-4/4 xl:w-11/12 xl:w-10/12 mx-auto flex flex-col xl:flex-row h-full box-border`}>
                    <div className={`container flex-wrap content-between my-4 w-11/12 md:w-11/12 h-full mx-auto xl:mx-2 xl:w-6/12 box-border`}>

                        <button
                            className={`${editLawyer ? "opacity-25 " : ""} ${editComent ? "hidden" : ""} float-right`}
                            onClick={handleEdit}
                        >
                            <img className="w-5 h-5 m-5" src={Config} />
                        </button>
                        <div ref={formRef} className={`${editLawyer ? "opacity-25 " : ""} ${editComent ? "hidden" : ""} ${edit ? "lg:h-full" : ""} h-96 p-6 md:p-8 bg-gray-200 lg:p-16 container p-2 w-full  mx-auto `}>
                            {!edit
                                ? <>
                                    <DateDetails
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
                                        dateDetails={true}
                                    />
                                </>
                                : <>
                                    <MeetingForm sendEdit={getEdit} />
                                </>
                            }

                            {/* 
                            <div className="mb-2 mt-2 block w-4/4 h/-4/4">
                                <p className="pb-2 text-justify font-semibold text-gray-600 text-sm">Nota: Cambios en tema asignado y agenda <br /> realizar hasta 24 horas antes de la fecha seleccionada.</p>
                            </div> */}

                            {/* <div className="block w-full"> */}
                            {/* {!edit
                                    ? <>
                                        <div className="my-2 block box-contend lg:inline-block w-full lg:w-2/4">
                                            <button
                                                disabled={oneDayFlag}
                                                onClick={handleEdit}
                                                className="w-full h-7 box-contentd border-2 border-black">
                                                <p className="text-xs mx-auto my-auto w-full h-full p-1.5 font-bold">SOLICITAR CAMBIOS</p>
                                            </button>
                                        </div>
                                    </>
                                    : <></>
                                } */}
                            {/* {edit
                                    ? <>
                                        <div className="my-1 block box-contend lg:p-2  lg:inline-block w-2/2 h-2/2 lg:w-3/4 ">
                                            <button
                                                onClick={handleSendRequest}
                                                type="submit" form='my-form' content='Submit' value='Submit'
                                                className="w-full h-7 text-white bg-black hover:bg-gray-800 lg:h-7 box-contentd border-2 border-black p-1">
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
                                    </>
                                    : <></>
                                } */}
                            {/* </div> */}
                        </div>

                        <div className={`${edit ? "opacity-25 pointer-events-none " : ""}  border-1 p-5 md:p-7 bg-black lg:p-12 container p-2 w-full  mx-auto h-2/12 box-border block xl:hidden mt-4`}>
                            <div className="p-2 block w-2/2">
                                <button
                                    className={`float-right`}
                                    onClick={handleEdit}
                                >
                                    <img className="w-5 h-5" src={Config_Withe} />
                                </button>
                                <p className="inline-block mx-1 font-bold  font-sans text-white">Abogado Asignado</p>
                            </div>
                            <div className="p-2 mb-2 block  w-4/4">
                                <div className="w-full md:w-1/4 mb-2 md:mb-0 block: md:inline-block mx-auto my-auto">
                                    <img className="w-16 h-16 mx-auto my-auto" src={Profile} />
                                </div>
                                <div className="w-full md:w-2/4 block: md:inline-block mx-auto my-auto">
                                    <p className="inline-block mx-1 font-bold text-white text-center w-full">{attendees_name}</p>
                                    <p className="block mx-1 text-white w-full text-center">Especialista en {singleBooking.topic_name}.</p>
                                </div>
                            </div>
                            <div className="p-1 lg:p-4  xl:p-1 mb-2 block w-4/4">
                                {/* <p className="pb-2 text-justify font-semibold text-gray-600 text-sm">Nota: Solo podrás solicitar cambio de abogado 1 sola vez,  hasta 24 horas antes de la fecha seleccionada. Apartir del segundo cambio se generará un costo adicional.</p> */}
                                <p className="text-justify font-semibold text-white text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quae.</p>
                                <p className="underline text-white float-right text-sm">ver más...</p>
                            </div>
                            {editLawyer
                                ?
                                <>
                                    <div className="my-2 block box-contend bg-gray-50 inline-block xl:hidden  w-full xl:w-3/4">
                                        <button
                                            // disabled={!oneDayFlag}
                                            onClick={requestLawyerChange}
                                            className="w-full h-7 box-contentd border-2 border-black">
                                            <p className="text-xs mx-auto my-auto  p-1.5 font-bold">SOLICITAR CAMBIO DE ABOGADO</p>
                                        </button>
                                        <button
                                            // disabled={!oneDayFlag}
                                            onClick={handleCancel}
                                            className="w-full h-7 box-contentd border-2 border-black">
                                            <p className="text-xs mx-auto my-auto  p-1.5 font-bold">CANCELAR</p>
                                        </button>
                                    </div>
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                        {!editLawyer
                            ?
                            <>
                                <div className={`${edit ? "opacity-25 pointer-events-none " : ""} bg-blue-600 w-full p-3 box-border  block xl:hidden`}>
                                    <a target="_blank" rel="noopener noreferrer" href={singleBooking.zoom_link}>
                                        <div className="w-full h-4/4 block box-content">
                                            <img className="w-full md:w-2/12 my-auto block md:inline-block w-6 h-6" src={Zoom} />
                                            <p className="w-4/4 my-auto block md:inline-block md:w-10/12 text-center xl:text-left box-content text-white ">Aceder a la reunion</p>
                                        </div>
                                    </a>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }
                        {!edit
                            ?
                            <>
                        {!editLawyer
                            ?
                            <>
                                <div className="p-6 md:p-8 lg:p-12 bg-gray-200  hidden xl:block container mx-2 mt-4 w-4/4 lg:h-full mx-auto  block  mb-5  max-h-80 overflow-auto">
                                    <button
                                        className={`${editLawyer ? "opacity-25 " : ""}  ${colapseComent ? "" : "hidden"} float-right -m-6 md:-m-8 lg:-m-12`}
                                        onClick={handleEditComent}
                                    >
                                        <img className="w-5 h-5 m-5" src={Config} />
                                    </button>
                                    <h2 className="text-lg bold font-black mb-1">Comentarios de la reunión</h2>
                                    <p>Podras ver y hacdfer cambios en los comentarios que has proporcionado para la reunión.</p>
                                    <button
                                        disabled={editComent}
                                        onClick={handleColapseComent}
                                        className="h-7 box-contentd w-full mx-auto mt-4 mb-2">
                                        <img className="w-3 h-3 mx-auto" src={ArrowDonwBlack} alt="" />
                                        <p className="text-xs mx-auto my-auto  p-1.5 font-bold">{colapseComent ? "Ocultar" : "Ver mas"}</p>
                                    </button>
                                    {editComent
                                        ?
                                        <>
                                            <textarea onChange={handleComentChange} name="" id="" rows="10" className="w-full">{singleBooking.brief}</textarea>
                                            <button
                                                disabled={empty}
                                                onClick={updateComent}
                                                className="w-full mb-1 h-7 box-contentd bg-black border-2 border-black">
                                                <p className="text-xs mx-auto my-auto text-white p-1.5 font-bold">ACTUALIZAR</p>
                                            </button>
                                            <button
                                                //    disabled={empty}
                                                onClick={cancelComent}
                                                className="w-full h-7 box-contentd bg-black border-2 border-black">
                                                <p className="text-xs mx-auto my-auto text-white p-1.5 font-bold">CANCELAR</p>
                                            </button>
                                        </>
                                        :
                                        <>
                                            {colapseComent
                                                ?
                                                <>
                                                    <p className="text-sm p-6">{singleBooking.brief}</p>
                                                </>
                                                :
                                                <>
                                                </>
                                            }
                                        </>
                                    }
                                </div>
                            </>
                            :
                            <>
                            </>
                        }
                        </>
                        :
                        <>
                        </>
}

                        {/* {!edit
                            ?
                            <>
                                {!editLawyer
                                    ?
                                    <>
                                        <div className="bg-gray-200 container mt-4 box-border p-5 h block lg:hidden p-16">
                                            <p className="font-bold  text-center  text-xl">¿Tienes dudas de tus citas?</p>
                                            <p>Envianos un mensaje y te conectaremos con nuestro Centro de Servicio al Cliente.</p><br />
                                            <div className="flex  items-center  flex-col md:flex-row">
                                                <div className="p-1 w-10 h-10">
                                                    <img className="w-15 h-15" src={Mail} />
                                                </div>
                                                <div className="p-1">
                                                    <div>info@pbhabogados.com</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center  flex-col md:flex-row">
                                                <div className="p-1 w-10 h-10">
                                                    <img className="w-15 h-15" src={Phone} />
                                                </div>
                                                <div className="p-1">
                                                    <div>+52(664) 634 6206</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center  flex-col md:flex-row">
                                                <div className="p-1">
                                                    <a target="new blank" href="https://api.whatsapp.com/send?phone=+5216646346206&text=Hola, estoy interesado en sus servicios legales." id="wats" >
                                                        <img className="w-5 h-5" src={Whatsapp} />
                                                    </a>
                                                </div>
                                                <div className="p-1">
                                                    <div>+52(664) 634 6206</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    </>
                                }
                            </>
                            :
                            <>
                            </>
                        } */}

                    </div>
                    <div className={`${edit ? "opacity-25 pointer-events-none " : ""} ${editComent ? "opacity-25 pointer-events-none " : ""}  container flex-wrap content-between xl:my-4 w-11/12 md:w-11/12 h-full mx-auto xl:mx-2 xl:w-6/12 box-border`}>
                        <button
                            className="float-right hidden xl:block"
                            onClick={handleEditLawyer}
                        >
                            <img className="w-5 h-5 m-5" src={Config_Withe} />
                        </button>
                        <div className={`p-5 md:p-7 bg-black lg:p-12 container p-2 w-full  mx-auto h-86 box-border hidden xl:block h-80 ${editLawyer ? "h-96" : ""}`}>
                            <div className="p-2 block w-2/2 xl:w-1/2">
                                <p className="inline-block mx-1 font-bold font-sans text-white text-xl">Abogado Asignado</p>
                            </div>
                            <div className="p-1 lg:p-4 xl:p-4 mb-2 block  w-4/4">
                                <div className="w-1/4 inline-block my-auto">
                                    <img className="w-16 h-16 mx-auto my-auto" src={Profile} />
                                </div>
                                <div className="w-3/4 inline-block my-auto">
                                    <p className="inline-block mx-1 font-bold text-white  text-xl">{attendees_name}</p>
                                    <p className="block mx-1 text-white">Especialista en {singleBooking.topic_name}.</p>
                                </div>
                            </div>
                            <div className="p-1 lg:p-4  xl:p-1 mb-2 block w-4/4">
                                {/* <p className="pb-2 text-justify font-semibold text-gray-600 text-sm">Nota: Solo podrás solicitar cambio de abogado 1 sola vez,  hasta 24 horas antes de la fecha seleccionada. Apartir del segundo cambio se generará un costo adicional.</p> */}
                                <p className="text-justify font-semibold text-white text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quae.</p>
                                <p className="underline text-white float-right text-sm">ver más...</p>
                            </div>
                            {editLawyer
                                ?
                                <>
                                    <div className="my-2 block box-contend bg-gray-50 hidden lg:inline-block w-full">
                                        <button
                                            // disabled={!oneDayFlag}
                                            onClick={requestLawyerChange}
                                            className="w-full h-7 box-contentd border-2 border-black">
                                            <p className="text-xs mx-auto my-auto  p-1.5 font-bold">SOLICITAR CAMBIO DE ABOGADO</p>
                                        </button>
                                        <button
                                            // disabled={!oneDayFlag}
                                            onClick={handleCancel}
                                            className="w-full h-7 box-contentd border-2 border-black">
                                            <p className="text-xs mx-auto my-auto  p-1.5 font-bold">CANCELAR</p>
                                        </button>
                                    </div>
                                </>
                                :
                                <>
                                </>
                            }

                        </div>
                        {!editLawyer
                            ?
                            <>
                                <div className={`${edit ? "pointer-events-none " : ""}  bg-blue-600 w-full p-2 box-border h-16 hidden xl:block box-border`}>
                                    <a target="_blank" rel="noopener noreferrer" href={singleBooking.zoom_link}>
                                        <div className="w-full   h-4/4 block box-content mx-auto">
                                            <div className="w-4/4 md:w-4/12  md:inline-block  my-auto">
                                                <img className="w-10 h-10 float-right mx-4 mt-1" src={Zoom} />
                                            </div>
                                            <div className="w-4/4 block md:inline-block md:w-8/12 box-content">
                                                <p className=" text-white text-2xl font-bold float-left">Acceder a la reunión</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }
                        {/* {!edit
                            ?
                            <>
                                {!editLawyer
                                    ?
                                    <>
                                        <div className="bg-gray-200 container mt-4 box-border p-5 hidden lg:block p-16  h-4/4 lg:h-2/3 container">
                                            <p className="font-bold  text-left  text-xl">¿Tienes dudas de tus citas?</p>
                                            <p>Envianos un mensaje y te conectaremos con nuestro Centro de Servicio al Cliente.</p><br />
                                            <div className="flex  items-center  flex-col md:flex-row">
                                                <div className="p-1 w-10 h-10">
                                                    <img className="w-15 h-15" src={Mail} />
                                                </div>
                                                <div className="p-1 mx-5">
                                                    <div>info@pbhabogados.com</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center  flex-col md:flex-row">
                                                <div className="p-1 w-10 h-10">
                                                    <img className="w-15 h-15" src={Phone} />
                                                </div>
                                                <div className="p-1 mx-5">
                                                    <div>+52(664) 634 6206</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center  flex-col md:flex-row">
                                                <div className="p-1">
                                                    <a target="new blank" href="https://api.whatsapp.com/send?phone=+5216646346206&text=Hola, estoy interesado en sus servicios legales." id="wats" >
                                                        <img className="w-5 h-5" src={Whatsapp} />
                                                    </a>
                                                </div>
                                                <div className="p-1 mx-8">
                                                    <div>+52(664) 634 6206</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    </>
                                }

                            </>
                            :
                            <>
                            </>
                        } */}
                        <div className="p-6 md:p-8 lg:p-12 bg-gray-200  block xl:hidden container mx-2 mb-4 w-4/4   mx-auto block">
                            <button
                                className={`${editLawyer ? "opacity-25 " : ""} float-right -m-6 md:-m-8 lg:-m-12`}
                                onClick={handleEditComent}
                            >
                                <img className="w-5 h-5 m-5" src={Config} />
                            </button>
                            <h2 className="text-lg bold font-black mb-2">Comentarios de la reunión</h2>
                            {editComent
                                ?
                                <>
                                    <textarea onChange={handleComentChange} name="" id="" rows="10" className="w-full">{singleBooking.brief}</textarea>
                                    <button
                                        disabled={empty}
                                        onClick={updateComent}
                                        className="w-full h-7 mb-1 box-contentd bg-black border-2 border-black">
                                        <p className="text-xs mx-auto my-auto text-white p-1.5 font-bold">ACTUALIZAR</p>
                                    </button>
                                    <button
                                        //    disabled={empty}
                                        onClick={cancelComent}
                                        className="w-full h-7 box-contentd bg-black border-2 border-black">
                                        <p className="text-xs mx-auto my-auto text-white p-1.5 font-bold">CANCELAR</p>
                                    </button>
                                </>
                                :
                                <>
                                    <p className="text-sm">{singleBooking.brief}</p>
                                </>
                            }
                        </div>
                        {!edit
                            ?
                            <>
                                {!editLawyer
                                    ?
                                    <>
                                        <div className="p-5 md:p-7 bg-gray-200  container mx-2  w-4/4 xl:h-2/3 mt-4 xl:mt-4 mx-auto block  mb-5 max-h-80 overflow-auto">
                                            <div className="p-1 md:p-5 overflow-auto">
                                                <p className="text-black font-bold font-sans text-xl">Documentos para tu abogado</p>
                                                <p className="text-black font-sans mb-5">Si deseas, puedes compartir los documentos sugeridos a continuación, para mejorar la atencion en consulta.</p>
                                                <button
                                                    // disabled={!oneDayFlag}
                                                    onClick={handleColapseDoc}
                                                    className="h-7 box-contentd w-full mx-auto">
                                                    <img className="w-3 h-3 mx-auto" src={ArrowDonwBlack} alt="" />
                                                    <p className="text-xs mx-auto my-auto  p-1.5 font-bold">{colapseDoc ? "Ocultar" : "Ver mas"}</p>
                                                </button>
                                                {colapseDoc
                                                    ?
                                                    <>
                                                        {
                                                            files.map((element, index) => <File edit={edit} key={index} nombre={element.name} />)
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    </>
                                }
                            </>
                            :
                            <>
                            </>
                        }

                    </div>
                </div>
            </div>
            <Footer meeting={true} />
        </Fragment >
    )
}
