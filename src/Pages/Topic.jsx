 import React, { Fragment, useState, useEffect } from 'react';
 import { Link, useParams } from "react-router-dom";
import { Navbar, Footer } from '@/Components'
import { topicService } from '@/Services'
import Logo from '@/Assets/img/pbh_2.png'
 
 export const Topic = () => {
    const [topic, setTopic] = useState({})
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
        topicService.getSingleTopic(id)
        .then(topic => setTopic(topic))
        .catch(err => console.log(err))
    }, []);

    
    return (
        <Fragment>
            <Navbar logo={Logo} />
                <div  className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full p-4">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
                            {topic.name}
                            </h2>
                        </div>
                        <div className="p-4 mt-4">
                            <div dangerouslySetInnerHTML={{ __html: topic.description }} />
                            <h3 className="text-black font-semibold mt-4">Honorarios por Asesoría Legal</h3>
                            <p>Nuestras tarifas pueden variar de acuerdo a cada caso.</p>
                            <p>Desde: $ {topic.price_from} dlls </p>
                            <Link to='/booking' className="mt-6 uppercase max-w-md whitespace-nowrap inline-flex items-center justify-center px-12 py-1 border border-transparent shadow-sm text-base font-medium text-white bg-black hover:bg-gray-600">Agenda tu cita aquí</Link>
                        </div>
                    </div>
                </div>
            <Footer />
        </Fragment>
    )
 }