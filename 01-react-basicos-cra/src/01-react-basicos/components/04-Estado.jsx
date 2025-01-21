//  ***********************************************************************
//  **********  /01-react-basicos-cra/src/components/Estado.jsx  **********
//  ***********************************************************************


import React, { Component } from "react";
import { Titulo } from "./Titulo";


export default class Estado extends Component {

    constructor(props) {

        super(props);
        this.state = {
            contador: 0
        };

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);

    }


    render() {
        
        return (
            
            <div className='componentes'>

                <Titulo nameTitulo="----------  4. El Estado  ----------" />
                <h2> El State </h2>
                <p> {this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        );
    }

}


function EstadoAHijo(props) {

    return (
        <div className='componentes'>
            <h3> {props.contadorHijo} </h3>
        </div>
    )
}