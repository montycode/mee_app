import React, { Fragment } from 'react'
import { Navbar } from '@/Components'
import { Link } from 'react-router-dom'
import Logo from '@/Assets/img/pbh_2.png'

export const BookingDetails = () => {
    return(
        <Fragment>          
            <div class="w-full bg-gray-100">
                <div className="p-4">
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
                                <div class="w-10 h-10 mx-auto bg-black text-lg text-white flex items-center">
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
                    <div class="w-full space-y-8 p-4 ">
                        <div>
                            <h2 class="mt-6 text-center text-3xl font-semibold text-gray-900">
                                Datos Personales
                            </h2>
                        </div>
                        <form class="mt-8 space-y-6 md:p-10" action="#" method="POST">
                            <div class="-space-y-px">
                                <div class="grid grid-cols-1 md:grid-cols-3">                            
                                    <div class="p-4 col-span-1">
                                        <label for="name" class="text-gray-900 font-semibold">Nombre(s)*</label>
                                        <input id="name" name="name" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="last_name" class="text-gray-900 font-semibold">Apellido Paterno*</label>
                                        <input id="last_name" name="last_name" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="mother_last_name" class="text-gray-900 font-semibold">Apellido Materno*</label>
                                        <input id="mother_last_name" name="mother_last_name" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="married_lastname" class="text-gray-900 font-semibold">Apellido de Casada/o*</label>
                                        <input id="married_lastname" name="married_lastname" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label class="block">
                                            <span class="text-gray-900 font-semibold">Estado Civil*</span>
                                            <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                            <option>Seleccione una opción</option>
                                            <option>Soltero</option>
                                            <option>Casado</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="p-4 col-span-1">                                
                                        <span class="text-gray-900 font-semibold">Fecha de Nacimiento*</span>
                                        <div class="flex space-x-2">
                                            <div class="w-1/3">
                                                <label class="block">
                                                    <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                                    <option>MM</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div class="w-1/3">
                                                <label class="block">
                                                    <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                                    <option>DD</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div class="w-1/3">
                                                <label class="block">
                                                    <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                                    <option>AAAA</option>
                                                    </select>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="p-4 col-span-1">                                
                                        <span class="text-gray-900 font-semibold">Lugar de Nacimiento*</span>
                                        <div class="flex space-x-2">
                                            <div class="w-1/3">
                                                <label class="block">
                                                    <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                                    <option>Ciudad</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div class="w-1/3">
                                                <label class="block">
                                                    <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                                    <option>Estado</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div class="w-1/3">
                                                <label class="block">
                                                    <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                                    <option>País</option>
                                                    </select>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="p-4 col-span-1 md:col-span-2">
                                        <label for="nationality" class="text-gray-900 font-semibold">Nacionalidad(es)*</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">Lugar de Residencia</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">Código Postal*</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">Correo electrónico*</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">Teléfono Principal*</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">Teléfono Móvil*</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">Ocupación*</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                </div>
                                <hr/>
                                <div class="grid grid-cols-1 md:grid-cols-2 space-y-6">
                                    <div class="p-4 col-span-1 md:col-span-2">
                                        <label class="block">
                                            <span class="text-gray-900 font-semibold">Ingrese aquí una breve descripción de sus dudas legales o tema(s) a tratar durante el servicio*</span>
                                            <textarea class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sml" rows="6" ></textarea>
                                        </label>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">Cliente anterior o nuevo cliente</label>
                                        <input id="nationality" name="nationality" type="text" required class="relative block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"/>
                                    </div>
                                    <div class="p-4 col-span-1">
                                        <label for="nationality" class="text-gray-900 font-semibold">¿Cómo se enteró de nosotros?*</label>
                                        <label class="block">
                                            <select class="block w-full p-2 border bg-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                                            <option>Lorem ipsum</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="p-4 col-span-1 md:col-span-2">
                                        <div class="block">
                                            <span class="text-gray-900 uppercase font-semibold">Declaración</span>
                                            <div class="mt-2">
                                            <div>
                                                <label class="inline-flex items-center">
                                                <input type="checkbox" class="form-checkbox text-indigo-600" checked />
                                                <span class="ml-2">Declaro que la información contenida en este formulario es verdadera, completa y proporciona la información de modo confiable y actualizada sobre todos los aspectos sobre los cuales se han hecho preguntas.</span>
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1">
                                    <div class="p-4 col-span-1">
                                        <Link to='/dashboard' class="p-x-10 group w-full col-span-1 relative uppercase flex justify-center py-2 px-4 border border-black text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">Continuar</Link>
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