import React, { Fragment } from 'react'
import { Navbar } from '@/Components'
import { Link } from 'react-router-dom'
import Logo from '@/Assets/img/pbh_2.png'

export const Booking = () => {
    return(
        <Fragment>          
            <div class="w-full py-6 bg-gray-100">
                <Navbar logo={Logo} />  
                <div class="flex">
                    <div class="w-1/3">
                        <div class="relative mb-2">
                        <div class="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
                            <span class="text-center text-white w-full">
                                1
                            </span>
                        </div>
                        </div>          
                        <div class="text-xs text-center md:text-base">Agendar Consulta</div>
                    </div>          
                    <div class="w-1/3">
                        <div class="relative mb-2">        
                        <div class="w-10 h-10 mx-auto bg-gray-300 text-lg text-white flex items-center">
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
            </div> 
            <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div class="max-w-xl w-full space-y-8 p-4 ">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-semibold text-gray-900">
                        Agendar Consulta
                    </h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <div class="-space-y-px">
                        <div class="p-4">
                            <label for="reason" class="text-gray-900 font-semibold">Motivo de consulta</label>
                            <input id="reason" name="reason" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                            <p class="italic text-xs mt-1 text-gray-600">Útil para identificar los diferentes temas a tratar</p>
                        </div>
                        <div class="p-4">
                            <label class="block">
                                <span class="text-gray-900 font-semibold">Área de Derecho</span>
                                <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                  <option>Mercantil Internacional</option>
                                  <option>Mercantil Internacional</option>
                                  <option>Mercantil Internacional</option>
                                  <option>Mercantil Internacional</option>
                                </select>
                              </label>
                        </div>
                        <div class="p-4">
                            <label for="booking-date" class="text-gray-900 font-semibold">Selecciona la fecha de tu preferencia</label>
                            <input id="booking-date" name="date" type="date" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2">                            
                            <div class="p-4 col-span-1">
                                <label for="booking-time" class="text-gray-900 font-semibold">Elige un horario</label>
                                <input id="booking-time" name="time" type="time" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                            </div>
                            <div class="p-4 col-span-1">                                
                                <label class="block">
                                    <span class="text-gray-900 font-semibold">Duración (Minutos)</span>
                                    <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
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
                            <div class="p-4 col-span-1">
                                <button class="w-full text-gray-300" disabled>Regresar</button>
                            </div>
                            <div class="p-4 col-span-1">
                                <Link to='/payment' class="group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Continuar</Link>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>   
        </Fragment>
    )
}