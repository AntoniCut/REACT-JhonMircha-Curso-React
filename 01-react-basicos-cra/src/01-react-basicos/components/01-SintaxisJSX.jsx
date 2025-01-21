//  ****************************************************************************
//  **********  /01-react-basicos-cra/src/components/SintaxisJSX.jsx  **********
//  ****************************************************************************


import React from 'react';
import { Titulo } from './Titulo';


export const SintaxisJSX = () => {

    const nombre = 'Antonio';
    const auth = true;

    const estaciones = [
        'Primavera',
        'Verano',
        'Otoño',
        'Invierno'
    ];

    return (
        
        <div className='componentes'>
            
            <Titulo nameTitulo="----------  1. Sintaxis JSX  ----------" />
            <label> <h2> Nombre </h2> </label>
            <input type="text" />

            <h2> {nombre} </h2>
            <p> {auth ? "El usuario esta Logeado" : "El usuario No esta Logeado"}</p>

            <p> {2 + 1} </p>

            <ul>
                {estaciones.map((estacion, index) => <li key={index}> {estacion} </li>)}
            </ul>

        </div>
    )
}
