//  ***************************************************************************************
//  **********  /01-react-basicos-cra/src/components/RenderizadoElementos.jsx  ************
//  ***************************************************************************************


import React, { Component } from "react";
import data from "../helpers/data.json";


export default class RenderizadoElementos extends Component {


    constructor(props) {
        super(props);
        this.state = {
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        }
    }


    render() {

        console.warn("Valor de data.json: ", data);

        return (

            <div className='componentes'>
                <h2> Renderizado de Elementos </h2> <br />
                <h3> Estaciones del Año </h3>
                <ul>
                    {   /* -----  Renderizado de Elementos  ----- */
                        this.state.seasons.map((elem, index) => <li key={index}>{elem}</li>)
                    }
                </ul>
                <br />

                <h3> Frameworks Frontend JavaScript </h3>

                <ul>
                    {
                        data.frameworks.map(elem => (
                            <RenderizadoElementoLista
                                key={elem.id}
                                elem={elem}
                            />
                        ))
                    }
                </ul>

            </div>
        )
    }
}


const RenderizadoElementoLista = (props) => {

    return <li>  <a href={props.elem.web} target="_blank" rel="noopener noreferrer"> {props.elem.name} </a> </li>

}
