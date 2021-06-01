import React, { memo, useState, useEffect } from "react";

export const Alert = () => {
    const [online, setOnline] = useState(navigator ? navigator.onLine : true);
    useEffect(() => {
        if (!window) return;
    
        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);

        return () => {
            window.removeEventListener("online", goOnline);
            window.removeEventListener("offline", goOffline);
        };
    });

    function goOnline() {
        setOnline(true);
    }

    function goOffline() {
        setOnline(false);
    }

    if (online) {
        return null;
    }

    return (
        <div class="p-2">
            <div class="inline-flex items-center bg-white leading-none text-purple-600 p-2 shadow text-teal text-sm">
                <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">Oops!</span>
                <span class="inline-flex px-2">Parece que no cuentas con conexión a internet, esto podría perjudicar tu experiencia en nuestro sitio. </span>
            </div>
        </div>
    )
}
