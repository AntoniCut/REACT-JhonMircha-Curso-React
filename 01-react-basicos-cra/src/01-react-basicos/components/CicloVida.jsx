//  ****************************************************************************
//  **********  /01-react-basicos-cra/src/components/CicloVida.jsx  ************
//  ****************************************************************************


import React, { Component } from 'react';


//  **********  Reloj en Version ES6  **********
class Reloj extends Component {

    //  ----------  CICLO DE VIDA DE LOS COMPONENTES  ----------

    //  -----  Desmontaje  -----
    componentWillUnmount() {
        console.warn(3, '\nComponentWillUnmount - El Componente "CicloVida" Ha sido Eliminado del DOM');
        //console.log("prevProps: ", "prevState: ", prevProps, prevState);
    }

    render() {

        return (
            <div>
                <h2>  Reloj </h2>
                <h3> {this.props.hora} </h3>
            </div>
        )
    }
}


//  **********  Ciclo de Vida en Version ES6  **********
export class CicloVida extends Component {

    constructor(props) {

        super(props);
        console.warn(0, 'Constructor - El Componente "CicloVida" se Inicializa');

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador = null;
    }


    //  -----  Métodos para el Reloj Digital  -----
    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar = () => {
        this.tictac();
        this.visible = true;
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.visible = false;
    }


    //  ----------  CICLO DE VIDA DE LOS COMPONENTES  ----------

    //  -----  Montaje  -----
    componentDidMount() {
        console.warn(1, 'ComponentDidMount - El Componente "CicloVida" ya se Encuentra en el DOM');
    }

    //  -----  Actualización  -----
    componentDidUpdate(prevProps, prevState) {
        console.warn(2, '\nComponentDidUpdate - El Estado o las Props del Componente "CicloVida" Ha Cambiado');
        console.log("prevProps: ", "prevState: ", prevProps, prevState);
    }


    render() {

        console.warn(4, this.state.hora, "\nEl Componente se Renderiza en el DOM Dibuja");

        return (
            <div className='componentes'>
                <h2>  Ciclo de Vida </h2>

                {this.state.visible && <Reloj hora={this.state.hora} />}

                <button className='btnContador' onClick={this.iniciar}> Iniciar </button>
                <button className='btnContador' onClick={this.detener}> Detener </button>
            </div>
        )
    }
}
