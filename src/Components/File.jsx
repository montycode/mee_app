import React from 'react'
import Arrow_Down from '@/Assets/img/icons/arrow-down.svg'

export const File = ({ edit, nombre, is_lawyer }) => {
    return (
        <>
            {is_lawyer
                ?
                <>
                    <div className="m-2 md-m-2 block mx-auto w-4/4">
                        <div className=" block text-center w-4/4 lg:w-5/12 lg:text-left lg:inline-block">
                            <label htmlFor="">{nombre}</label>
                        </div>
                        <p className="underline block m-1 w-11/12 lg:inline-block lg:w-6/12 mx-auto text-center lg:text-left">{nombre}.pdf</p>
                        <button
                            disabled={edit}
                            className="block text-white w-11/12 lg:w-1/12 lg:inline-block mx-auto">
                             <img className="w-5 h-5 mx-auto" src={Arrow_Down} />
                        </button>
                    </div>
                </>
                :
                <>
                    <div className="m-2 md-m-2 block mx-auto w-4/4">
                        <div className=" block text-center w-11/12 xl:w-4/12 xl:text-left xl:inline-block">
                            <label htmlFor="">{nombre}</label>
                        </div>
                        <input
                            disabled={edit}
                            type="text"
                            className="block m-1 w-11/12 xl:inline-block  xl:w-4/12 mx-auto" />
                        <button
                            disabled={edit}
                            className="bg-gray-900 block text-white w-11/12 xl:w-4/12 xl:inline-block mx-auto">
                            <p className="p-1 md:p-1.5 text-xs">Cargar Archivo</p>
                        </button>
                    </div>
                </>
            }
        </>
    )
}
