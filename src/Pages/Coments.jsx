import React, { Fragment, useState, useEffect, useRef } from 'react'
import Logo from '@/Assets/img/pbh_2.png'
import { Navbar } from '@/Components'
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router"
import { bookingService } from '@/Services'

export const Coments = () => {
    const { state } = useLocation();
    const [brief, setBrief] = useState()
    const [empty, setEmpty] = useState(true)
    const history = useHistory();
    let booking_id = state.id;
    console.log(booking_id)
    function handleChange(e) {
        setBrief(e.target.value);
        setEmpty(false)
    }
    console.log(brief)
    function action() {
        if (!empty) {
            bookingService.updateBookingBrief(booking_id, brief).then(
                booking => {
                    // setSubmitting(true);//ADDED TESTING
                    // setSubmitting(false);
                    console.log(booking)
                    history.push({
                        pathname: '/confirmation',
                        state: { id: booking_id }
                    });
                },
                error => {
                    // setSubmitting(false);
                    setStatus({
                        sent: false,
                        msg: `Oops! ${error}. Algo salió mal, intenta nuevamente.`
                    });
                },
            );
        }
    }
    return (
        <>
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
                                <div className="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
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
            <div className="w-1/2 mx-auto block bg-gray-200 p-10">
                <form>
                    <label className="w-3/4 mx-auto block text-center" htmlFor="w3review">Para poder asistirle mejor, por favor describa de manera breve su caso</label>
                    <textarea onChange={handleChange} className="w-3/4 border-2 mx-auto block text-center my-2" id="w3review" name="w3review" placeholder="" rows="4" cols="50" />
                </form>
            </div>


            <button disabled={empty} className="bg-black text-white block mx-auto w-1/4 my-2" onClick={action}>Continuar</button>
        </>
    )
}

