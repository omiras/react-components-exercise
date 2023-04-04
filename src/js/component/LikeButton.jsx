import React, { useState } from "react";

// Este componente no tiene props!
export default function LikeButton() {
    
    // Almacenamos todos los posibles  valores
    const colors = ['purple','blue','green','yellow','orange','red'];

    // estado de nuestro componente: una variable para almacenar el número de likes. Inicialmente, su valor es 0.
    // no hace falta una variable de estado para almacenar el color que toca, pues podemos calcular el color que toca en función del número de likes que tenemos
    const [likes, setLikes] = useState(0);

    // estilos base
    const styles = {
        fontSize: '1.2rem',
        padding: '0.2rem',
        fontFamily :'Verdana, sans-serif',
        backgroundColor: colors[likes % colors.length] // Es una técnica muy usada para no tener en cuenta los índices del array.  https://www.banjocode.com/post/javascript/iterate-array-with-modulo
    };

    return <button style={styles} onClick={()=>setLikes(likes + 1)}>
        {likes} Likes
    </button>

}