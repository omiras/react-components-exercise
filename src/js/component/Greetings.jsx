import React from 'react';

// Español y francés
export default function Greetings({lang, children}) {

    // switch
    // if
    // ternary

    if (lang=='es') {
        return <p>Hola {children}</p>;
    }

    return <p>Bonjour {children}</p>
}