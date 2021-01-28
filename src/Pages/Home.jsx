import React, { Fragment } from 'react';
import Icon from '@/Assets/img/icn_about_pbh.png'
import { Header, Navbar, Footer } from '@/Components'
import Logo from '@/Assets/img/pbh_blanco1.png'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header>
                    <Navbar logo={Logo} />
                </Header>
                <div className="py-16">
                    <div className="container m-auto px-6">
                        <div className="lg:flex justify-between items-center">
                            <div className="lg:w-6/12 lg:p-0 p-7 order-2 space-y-5">
                                <h2 className="text-4xl font-semibold leading-tight capitalize">¿Quiénes somos?</h2>
                                <p className="">Fundada en el año de 2005, en la ciudad de Tijuana, Baja California, en PBH Abogados nos
                                dedicamos a brindar servicios legales a nuestros clientes de manera creativa, especializada y oportuna.
                                </p>
                                <p>Estamos comprometidos con la excelencia, por lo que contamos con un equipo dinámico de profesionistas del
                                derecho, que cuentan con la experiencia y los conocimientos necesarios para ayudar a nuestros clientes a
                                resolver sus necesidades de índole legal.</p>
                            </div>
                            <div className="lg:w-5/12">
                                <img src={Icon} alt="" className="rounded"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner bg-cover bg-center h-auto text-white py-24 px-10 object-fill">
                    <div className="p-2 text-center space-y-2">
                        <h3 className="text-3xl font-semibold">Asesoría en Línea</h3>
                        <p className="mb-10 leading-none">Contamos con un sofisticado sistema en el que con un usuario y contraseña, puedes
                        fácilmente ponerte en contacto con nosotros para que nos permitas ayudarte a resolver tus dudas y necesidades.
                        </p>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export { Home };