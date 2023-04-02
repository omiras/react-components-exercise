import React from 'react';

function rgbToHex(r, g, b) {
    // Convierte cada valor RGB en su equivalente hexadecimal de 2 dígitos
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
    
    // Concatena los valores hexadecimales para formar el color completo en formato hexadecimal
    const hexColor = "#" + hexR + hexG + hexB;
    
    // Retorna el color en formato hexadecimal
    return hexColor;
  }



export default function BoxColor({r, g, b}) {

    const backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    
    const styles = {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor
    }

    return <div style={styles} className="px-2 py-4 w-75 text-center text-white fs-4">
        <div>{backgroundColor}</div>
        <div>{rgbToHex(r, g, b)}</div>
    </div>;
}