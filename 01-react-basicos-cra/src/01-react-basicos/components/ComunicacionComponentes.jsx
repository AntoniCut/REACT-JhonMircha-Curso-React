//  ******************************************************************************************
//  **********  /01-react-basicos-cra/src/components/ComunicacionComponentes.jsx  ************
//  ******************************************************************************************


import React, { Component } from 'react'


//  **********  Componente Padre de Clase  **********
export class Padre extends Component {

    state = {
        contador: 0
    }

    incrementarContador = (e) => {

        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {

        return (
            <>
                <div className='componentes'>

                    <h2> Comunicacion Entre Componentes </h2>
                    <Hijo incrementarContador={this.incrementarContador} mensaje='Mensaje para el hijo Nº 1'/>
                    <Hijo incrementarContador={this.incrementarContador} mensaje='Mensaje para el hijo Nº 2'/>
                    <div style={{color: 'white', fontSize: '28px'}}> {this.state.contador} </div>
                </div>
            </>
        )
    }
}


//  **********  Componente Hijo Funcional  **********
function Hijo(props) {

    return (
        <>
            <h3> {props.mensaje} </h3>
            <button className='btnContador' onClick={props.incrementarContador}> + </button>

        </>
    )
}
