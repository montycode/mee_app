import React, { Fragment, useState, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Navbar } from '@/Components'
import { Link } from 'react-router-dom'
import { topicService } from '@/Services'
import Logo from '@/Assets/img/pbh_2.png'
import * as Yup from 'yup'

export const Booking = () => {
    const [topics, setTopics] = useState({})
    
    useEffect(() => {
        topicService.getTopics()
        .then(topics => setTopics(topics))
        .catch(err => console.log(err))
    }, []);

    console.log(topics);
    return(
        <Fragment>          
            <div className="w-full bg-gray-100">
                <div className="p-4">
                    <Navbar logo={Logo} />  
                    <div className="flex md:p-10">
                        <div className="w-1/3">
                            <div className="relative mb-2">
                            <div className="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
                                <span className="text-center text-white w-full">
                                    1
                                </span>
                            </div>
                            </div>          
                            <div className="text-xs text-center md:text-base">Agendar Consulta</div>
                        </div>          
                        <div className="w-1/3">
                            <div className="relative mb-2">        
                            <div className="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
                                <span className="text-center text-white w-full">
                                    2
                                </span>
                            </div>
                            </div>          
                            <div className="text-xs text-center md:text-base">Realiza tu pago</div>
                        </div>          
                        <div className="w-1/3">
                            <div className="relative mb-2">          
                            <div className="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
                                <span className="text-center text-white w-full">
                                    3
                                </span>
                            </div>
                            </div>                
                            <div className="text-xs text-center md:text-base">Confirmacion</div>
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
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="-space-y-px">
                        <div className="p-4">
                            <label HtmlFor="reason" className="text-gray-900 font-semibold">Motivo de consulta</label>
                            <input id="reason" name="reason" type="text" required className="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                            <p className="italic text-xs mt-1 text-gray-600">Útil para identificar los diferentes temas a tratar</p>
                        </div>
                        <div className="p-4">
                            <label className="block">
                                <span className="text-gray-900 font-semibold">Motivo de consulta</span>
                                <select className="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                  <option>Mercantil Internacional</option>
                                  <option>Mercantil Internacional</option>
                                  <option>Mercantil Internacional</option>
                                  <option>Mercantil Internacional</option>
                                </select>
                              </label>
                        </div>
                        <div className="p-4">
                            <label HtmlFor="booking-date" className="text-gray-900 font-semibold">Selecciona la fecha de tu preferencia</label>
                            <input id="booking-date" name="date" type="date" required className="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">                            
                            <div className="p-4 col-span-1">
                                <label HtmlFor="booking-time" className="text-gray-900 font-semibold">Elige un horario</label>
                                <input id="booking-time" name="time" type="time" required className="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                            </div>
                            <div className="p-4 col-span-1">                                
                                <label className="block">
                                    <span className="text-gray-900 font-semibold">Duración (Minutos)</span>
                                    <select className="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                    <option>15 mins</option>
                                    <option>30 mins</option>
                                    <option>45 mins</option>
                                    <option>1 hora</option>
                                    <option>1 hora 15 mins</option>
                                    <option>1 hora 30 mins</option>
                                    <option>1 hora 45 mins</option>
                                    <option>2 horas</option>
                                    </select>
                                </label>
                            </div>
                            <div className="p-4 col-span-1">
                                <button className="w-full text-gray-300" disabled>Regresar</button>
                            </div>
                            <div className="p-4 col-span-1">
                                <Link to='/payment' className="group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Continuar</Link>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>   
        </Fragment>
    )
}