import React, { Fragment, useState, useEffect } from 'react'
import Icon from '@/Assets/img/icn_about_pbh.png'
import { Header, Navbar, Footer, TopicList, TopicCard } from '@/Components'
import { topicService } from '@/Services'
import Logo from '@/Assets/img/pbh_blanco1.png'
import { authenticationService } from '@/Services'
import { userService } from '@/Services'


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: [],
            loading: false,
            open: true,
            currentUser: null
        };
        this.loca
    }


    componentDidMount() {
        this.getTopics()
        this.setState({ loading: false })
        this.setState({ currentUser: authenticationService.currentUserValue })
    }
    closeModal() {
        this.setState({ open: false })
    }
    getTopics() {
        this.setState({ loading: true })
        topicService.getTopics()
            .then(topics => this.setState({ topics }))
            .catch(err => console.log(err))
    }

    render() {
        const { topics } = this.state;
        const { state } = this.props.location;
        let is_lawyer
        if (state) {
            is_lawyer = state.is_lawyer;
        }
        // console.log(is_lawyer, state)
        return (
            <Fragment>
                {/* {
                    this.state.currentUser
                        ?
                        <></>
                        :
                        <dialog class={`${this.state.open ? '' : 'hidden'} bg-gray-500 bg-opacity-70 my-auto z-10 w-screen h-screen text-black flex items-center justify-center`}>
                            <div class="bg-white w-11/12 h-10/12 md:w-2/3 md:h-5/12 mx-auto my-auto m-3 p-10">
                                <p class="m-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab deleniti corrupti saepe et cupiditate eius laboriosam blanditiis eos fugit autem recusandae iusto dignissimos officia repellat nostrum, quam aspernatur id.</p>
                                    <TermsConditions />
                                <button onClick={() => this.closeModal()} class="my-2 mx-0 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-gray-100 bg-gray-900  hover:bg-black">Aceptar</button>
                            </div>
                        </dialog>

                } */}


                <Header is_lawyer={is_lawyer}>
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
                                <img src={Icon} alt="" className="rounded" />
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
                <TopicList>
                    {topics.map((topic) => <TopicCard key={topic.id} {...topic} />)}
                </TopicList>
                <Footer />
            </Fragment>
        );
    }
}

export { Home };