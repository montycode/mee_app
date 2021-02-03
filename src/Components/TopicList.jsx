import React from 'react';

export const TopicList = ({ children }) => {
    return(
        
    <div className="container mx-auto p-8 space-y-2">
        <h3 className="text-4xl font-semibold leading-tight text-center">Selecciona un tema y te asesoraremos con gusto</h3>
        <div className="flex flex-row flex-wrap justify-between -mx-2">
            {children}
        </div>
    </div>
    )
}