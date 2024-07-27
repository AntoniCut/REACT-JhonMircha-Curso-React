//  ******************************************************
//  **********  /src/components/Componente.jsx  **********
//  ******************************************************

import React, {Component} from "react";


/**
 * -----  Componente de Clase  -----
 */
export class ComponenteClase extends Component {

    render() {
        return <h2> {this.props.msg} </h2>
    }

}

/**
 * -----  Componente Funcional  -----
 * @param {String} props 
 * @returns {String}
 */
export function ComponenteFuncional(props) {

    return <h2> {props.msg} </h2>
}


export const Componente = props => <h2> {props.msg} </h2>



