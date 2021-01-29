import React from 'react';
import { Link } from 'react-router-dom'

export const Header = ({ children }) =>  {
    return(
        <header id="up" className="header bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
            <div className="container m-auto px-6">
                {children}
                <div className="h-screen flex items-center justify-between bg-cover bg-center">
                    <div className="mx-2 text-left md:w-1/2 space-y-6 p-4">
                        <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-5xl">
                            <span className="text-white">Mexicanos en el Extranjero y </span> PBH Abogados
                        </h1>
                        <p className="text-white">Mexicanos en el Extranjero es auspiciado por PBH Abogados, una firma de abogados
                            enfocados en brindar asesoría legal practica y efectiva.</p>
                        <div className="inline-flex">
                            <Link to='/booking'
                            className="bg-gray-100 py-4 px-8 text-gray-900 font-semibold uppercase text-xs hover:bg-white ">Agenda tu cita</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}