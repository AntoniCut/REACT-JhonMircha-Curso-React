//  *******************************************************
//  **********  /src/components/Propiedades.jsx  **********
//  *******************************************************


import React from "react";
import PropTypes from 'prop-types';


/**
 * -----  Componente Propiedades  -----
 * @param {Object} props 
 * @returns {Object}
 */
export default function Propiedades(props) {

    return (

        <div>
            <h2> {props.porDefecto} </h2>
            <ul>
                <li> props cadena: {props.cadena} </li>
                <li> props numero: {props.numero} </li>
                <li> props booleano: {props.booleano ? "Verdadero" : "Falso"} </li>
                <li> props arreglo: {props.arreglo.join(", ")} </li>
                <li> props objeto - nombre: {props.objeto.nombre} <br /> props objeto - correo: {props.objeto.correo} </li>
                <li> props funcion: {props.arreglo.map(props.funcion).join(", ")} </li>
                <li> props reactElement: {props.reactElement} </li>
                <li> props reactComponent: {props.reactComponent} </li>
            </ul>
        </div>

    )

}


Propiedades.defaultProps = {
    porDefecto: "Las Props"
};

Propiedades.propTypes = {
    //cadena
    numero: PropTypes.number.isRequired,
    //booleano
    //arreglo
    //objeto
    //funcion
    //reactElement
    //reactComponent
};