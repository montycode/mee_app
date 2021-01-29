import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '@/Helpers'
import { authenticationService } from '@/Services'
import NavLogo from '@/Assets/img/pbh_2.png'

export const Navbar = ({ logo }) => {
    const [openNav, setOpenNav] = useState(false);
    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue);

    const handleNav = () =>{
        setOpenNav(!openNav)
    }

    const logout = () => {
        authenticationService.logout();
        history.push('/login');
    }

    return (
        <Fragment>
            {/* Navigation starts */}
            <div className="mx-auto px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to='/'>
                            <span className="sr-only">PBH</span>
                            <img className="" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" onClick={handleNav} className={`bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900`}>
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    {currentUser ? 
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to='/dashboard'
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-gray-600 bg-opacity-75 hover:bg-opacity-100">
                                Mis Citas
                            </Link>
                            <button onClick={logout} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-black bg-opacity-75 hover:bg-opacity-100">Cerrar Sesión</button>
                        </div> :                            
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to='/login'
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-gray-600 bg-opacity-75 hover:bg-opacity-100">
                                Iniciar Sesión
                            </Link>
                            <Link to='/register'
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-black bg-opacity-75 hover:bg-opacity-100">
                                Regístrate Aquí
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <div className={`absolute top-0 inset-x-0 p-2 transition z-50 transform origin-top-right ${openNav ? '' : 'hidden'}`} >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link to="/">
                                    <span className="sr-only">PBH</span>
                                    <img src={NavLogo} alt="" />
                                </Link>
                            </div>
                            <div className="-mr-2">
                                <button type="button" onClick={handleNav} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
                                    <span className="sr-only">Cerrar Menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                <Link to="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                        Inicio
                                    </span>
                                </Link>
                                {currentUser && 
                                <Link to="/dashboard" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                    <span className="ml-3 text-base font-medium text-gray-900">
                                        Mis Citas
                                    </span>
                                </Link>                                
                                }
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        {currentUser ? 
                            <div className=""><a onClick={logout} className="my-2 w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900">Cerrar Sesión</a></div> :
                            <div>
                                <Link to='/login'
                                    className="my-2 w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-gray-500 hover:bg-gray-600">
                                    Iniciar Sesión
                                </Link>
                                <Link to='/register'
                                    className="my-2 w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900">
                                    Regístrate Aquí
                                </Link>
                            </div>                                
                        }
                    </div>
                </div>
            </div>
            {/* Navigation ends */}
        </Fragment>
    );
}
