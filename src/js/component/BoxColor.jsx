import React from 'react';
import Color from 'color';

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

function rgbToHexNPM(r, g, b) {

    // crear un objeto de tipo Color
    const color = Color('rgb(' + r + ', ' + g + ', ' + b + ')');

    // obtenemos su conversión hexadecimal usando el método .hex que nos proporciona el paquete
    return color.hex();

}


export default function BoxColor({r, g, b}) {

    // rgb(255, 0, 0)
    const backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    
    // estilos en línea con React. Usamos un objeto auxiliar.
    const styles = {
        borderWidth: 2, //2px. Cualquier otro valor , SI hay que ponerlo con "1rem", "10%", "20px"
        borderStyle: 'solid',
        borderColor: 'black',
        backgroundColor // cuando la propiedad y el nombre de la variable de la que obtenemos el valor , es el mismo, te puedes 'ahorrar' especificar explícitament el valor con los dos puntos
    }

    return <div style={styles} className="px-2 py-4 w-75 text-center text-white fs-4">
        <div>{backgroundColor}</div>
        <div>{rgbToHexNPM(r, g, b)}</div>
    </div>;
}