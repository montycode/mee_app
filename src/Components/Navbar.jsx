import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '@/Helpers'
import { authenticationService } from '@/Services'
import { Alert, Notifications } from '@/Components'
import NavLogo from '@/Assets/img/pbh_2.png'
import ArrowDonw from '@/Assets/img/icons/arrow-down.png'

export const Navbar = ({ logo, is_lawyer }) => {
    const [openNav, setOpenNav] = useState(false);
    const [openDropDnw, setOpenDropDnw] = useState(false);
    const [hoverDates, setHoverDates] = useState(false);
    const [hoverProfile, setHoverProfile] = useState(false);
    const [currentUser, setCurrentUser] = useState(authenticationService.currentUserValue);

    const handleNav = () => {
        setOpenNav(!openNav)
    }
    const handleDropDwn = () => {
        setOpenDropDnw(!openNav)
    }
    const handleHoverDates = () => {
        setHoverDates(!hoverDates)
    }

    const handleHoverProfile = () => {
        setHoverProfile(!hoverProfile)
    }

    const logout = () => {
        authenticationService.logout();
        history.push('/login');
    }
    console.log(is_lawyer)

    return (
        <Fragment>
            {/* Navigation starts */}
            <div className="mx-auto px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start md:w-0 md:flex-1 lg:w-0 lg:flex-1">
                        {is_lawyer
                            ?
                            <>
                                <Link to={{ pathname: '/', state: { is_lawyer } }}>
                                    <span className="sr-only">PBH</span>
                                    <img className="" src={logo} alt="" />
                                </Link>
                            </>
                            :
                            <>
                                <Link to="/">
                                    <span className="sr-only">PBH</span>
                                    <img className="" src={logo} alt="" />
                                </Link>
                            </>
                        }
                    </div>
                    <div className="-mr-2 -my-2 lg:hidden">
                        <button type="button" onClick={handleNav} className={`bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900`}>
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    {currentUser
                        ?
                        // <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        // <Link to='/dates'
                        //     className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-gray-600 bg-opacity-75 hover:bg-opacity-100">
                        //     Mis Citas
                        // </Link>
                        //     <button onClick={logout} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-black bg-opacity-75 hover:bg-opacity-100">Cerrar Sesión</button>
                        // </div>
                        // <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <div className="hidden lg:block md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto">
                            <div className="inline-block w-32 mr-10">
                                <button onClick={handleDropDwn} onMouseOver={handleDropDwn} className=" w-full overflow-hidden focus:outline-none ml-8 whitespace-nowrap inline-flex items-center justify-center px-0.5 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-gray-600 bg-opacity-75 hover:bg-opacity-100 block">
                                    Mi Cuenta
                                    <img className="ml-2 w-3 h-3" src={ArrowDonw} alt="" />
                                </button>
                            </div>

                            <div className="inline-block w-32">
                                <button onClick={logout} className="w-full ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-black bg-opacity-75 hover:bg-opacity-100">Cerrar Sesión</button>
                            </div>

                            <div onMouseLeave={() => setOpenDropDnw(false)} className={`absolute w-32 ml-8 mr-10  z-10  bg-gray-200 ${openDropDnw ? '' : 'hidden'}`}>

                                <div onMouseOver={handleHoverDates} onMouseLeave={() => setHoverDates(false)} className={`bg-gray-200 w-full h-1/2 block ${hoverDates ? 'bg-gray-800 text-white' : ''}   box-border`}>
                                    <Link to='/dates' className="block">
                                        <p className="block text-center p-2">Mis Citas</p>
                                    </Link>
                                </div>

                                <div onMouseOver={handleHoverProfile} onMouseLeave={() => setHoverProfile(false)} className={`bg-gray-200 w-full h-1/2 block ${hoverProfile ? 'bg-gray-800 text-white' : ''}  box-border`}>
                                    <Link to='/profile-data' className="block">
                                        <p className="block text-center p-2">Mi Perfil</p>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        :
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
                                {currentUser &&
                                    <>
                                        <Link to="/dates" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                Mis Citas
                                            </span>
                                        </Link>
                                        <Link to="/profile-data" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                            <span className="ml-3 text-base font-medium text-gray-900">
                                                Mi Perfil
                                            </span>
                                        </Link>
                                    </>

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
            <Notifications />
            <Alert />
        </Fragment>
    );
}
