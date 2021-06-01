import React, { Fragment } from 'react'
import { Navbar, CheckoutForm } from '@/Components'
import { Link } from 'react-router-dom'
import Logo from '@/Assets/img/pbh_2.png'

export const Payment = () => {
    return(
        <Fragment>          
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
                                <div className="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
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
                <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-xl w-full space-y-8 p-4 ">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                                Realiza tu pago
                            </h2>
                        </div>
                        <div className="mt-8 space-y-6" action="#" method="POST">
                            <div className="-space-y-px">
                                <CheckoutForm />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </Fragment>
    )
}