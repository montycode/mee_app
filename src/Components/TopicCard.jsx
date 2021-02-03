import React from 'react';

export const TopicCard = ({ id, name }) => {
    return(        
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 p-6 shadow-lg bg-white">
            <div className="relative text-center">
                <div className="p-4 space-y-2 my-8">
                    <h3 className="text-lg font-semibold mb-8">
                        <a className="stretched-link" href={`/topics/${id}`} title="Card 1">
                            {name}
                        </a>
                    </h3>
                    <a href={`/topics/${id}`}
                    className="bg-black py-2 px-8 text-white font-semibold uppercase text-xs hover:bg-gray-800 p-4 mb-8">Ver Más</a>
                </div>
            </div>
        </div>
    )
}