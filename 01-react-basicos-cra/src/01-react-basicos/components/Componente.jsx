//  ******************************************************
//  **********  /src/components/Componente.jsx  **********
//  ******************************************************

import React, {Component} from "react";


/**
 * -----  Componente de Clase  -----
 */
export class ComponenteClase extends Component {

    render() {
        return (
            <div className="componentes">
                <h2> {this.props.msg} </h2>
            </div>
        )
    }

}

/**
 * -----  Componente Funcional  -----
 * @param {String} props 
 * @returns {String}
 */
export function ComponenteFuncional(props) {

    return (
        <div className="componentes">
            <h2> {props.msg} </h2>
        </div>
        
    )
}


export const Componente = props => {

    return (
        <div className="componentes">
            <h2> {props.msg} </h2>
        </div>
    )
}



