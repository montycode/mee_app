import React, { Fragment } from 'react'
import { Navbar } from '@/Components'
import { Link } from 'react-router-dom'
import Logo from '@/Assets/img/pbh_2.png'

export const Payment = () => {
    return(
        <Fragment>          
            <div class="w-full py-6 bg-gray-100">
                <Navbar logo={Logo} />  
                <div class="flex md:p-10">
                    <div class="w-1/3">
                        <div class="relative mb-2">
                            <div class="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
                                <span class="text-center text-white w-full">
                                    1
                                </span>
                            </div>
                        </div>
                        <div class="text-xs text-center md:text-base">Agendar Consulta</div>
                    </div>
                    <div class="w-1/3">
                        <div class="relative mb-2">
                            <div class="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
                                <span class="text-center text-white w-full">
                                    2
                                </span>
                            </div>
                        </div>
                        <div class="text-xs text-center md:text-base">Realiza tu pago</div>
                    </div>
                    <div class="w-1/3">
                        <div class="relative mb-2">
                            <div class="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
                                <span class="text-center text-white w-full">
                                    3
                                </span>
                            </div>
                        </div>

                        <div class="text-xs text-center md:text-base">Datos Personales</div>
                    </div>
                </div>
                <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
                    <div class="max-w-xl w-full space-y-8 p-4 ">
                        <div>
                            <h2 class="mt-6 text-center text-3xl font-semibold text-gray-900">
                                Realiza tu pago
                            </h2>
                        </div>
                        <form class="mt-8 space-y-6" action="#" method="POST">
                            <div class="-space-y-px">
                                <div class="p-4">
                                    <label for="reason" class="text-gray-900 font-semibold">Nombre</label>
                                    <input id="reason" name="reason" type="text" required
                                        class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    <p class="italic text-xs mt-1 text-gray-600">Justo como aparece en la tarjeta*</p>
                                </div>
                                <div class="p-4">
                                    <label for="reason" class="text-gray-900 font-semibold">Correo electrónico</label>
                                    <input id="reason" name="reason" type="text" required
                                        class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2">
                                    <div class="p-4 col-span-1 md:col-span-2">
                                        <label for="payment" class="text-gray-900 font-semibold">Datos de pago</label>
                                        <div class="flex">
                                            <input type="text" id="payment"
                                                class="w-5/6 flex-1 relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                                placeholder="Tarjeta"/>
                                            <input type="text" id="payment"
                                                class="w-1/6 inline-block text-sm bg-gray-200 text-grey-darkest p-3 focus:outline-none"
                                                placeholder="MM / YY"/>
                                            <input type="text" id="payment"
                                                class="w-1/6 inline-block text-sm bg-gray-200 text-grey-darkest rounded-r p-3 focus:outline-none"
                                                placeholder="CVC"/>
                                        </div>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <Link to='/booking'
                                            class="group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-3000"
                                            disabled>Regresar</Link>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <Link to='/details'
                                            class="group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Continuar</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>   
        </Fragment>
    )
}