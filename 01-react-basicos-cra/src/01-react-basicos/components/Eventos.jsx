//  **************************************************************************
//  **********  /01-react-basicos-cra/src/components/Eventos.jsx  ************
//  **************************************************************************


import React, { Component } from 'react'


//  **********  EventosES6  **********
export class EventosES6 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            contador: 0
        }

        //  -----  Bindear el Método de la Clase  -----
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
        this.reset = this.reset.bind(this);
    }

    restar() {
        if (this.state.contador === 0) return;
        this.setState({
            contador: this.state.contador - 1
        })
    }

    sumar() {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    reset() {
        this.setState({
            contador: 0
        })
    }

    render() {

        return (

            <div className='componentes'>

                <h2> Eventos en Componentes de Clase ES6 </h2>

                <div className='contador-container'>
                    <button className='btnContador' onClick={this.restar}> - </button>
                    <h3> {this.state.contador} </h3>
                    <button className='btnContador' onClick={this.sumar}> + </button>
                </div>
                <button className='btnContador' onClick={this.reset}> reset </button>

            </div>
        )
    }
}


//  **********  EventosES7  --  Properties Initializer  **********
export class EventosES7 extends Component {


    state = {
        contador: 0
    };

    restar = () => {
        if (this.state.contador === 0) return;
        this.setState({
            contador: this.state.contador - 1
        })
    }

    sumar = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    reset = () => {
        this.setState({
            contador: 0
        })
    }

    render() {

        return (

            <div className='componentes'>

                <h2> Eventos en Componentes de Clase ES7 </h2>

                <div className='contador-container'>
                    <button className='btnContador' onClick={this.restar}> - </button>
                    <h3> {this.state.contador} </h3>
                    <button className='btnContador' onClick={this.sumar}> + </button>
                </div>
                <button className='btnContador' onClick={this.reset}> reset </button>

            </div>
        )
    }
}


//  **********  Boton  --  Evento Personalizado  *****
const Boton = props => <button className='btnContador' onClick={props.myOnClick} > Boton Hecho Componente </button>


//  **********  MasSobreEventos  **********
export class MasSobreEventos extends Component {


    handleClick = (e, mensaje) => {

        //  -----  Evento sintetico  -----
        console.log("e: ", e);
        console.log("e.target: ", e.target);

        //  -----  Evento Nativo de JS  -----
        console.log("\ne.nativeEvent: ", e.nativeEvent);
        console.log("e.nativeEvent.target: ", e.nativeEvent.target);
        
        console.log("\n", mensaje);
    }


    render() {

        return (

            <div className='componentes'>

                <h2> Mas Sobre Eventos </h2>

                <button className='btnContador' onClick={this.handleClick}> Saludar </button>
                <button className='btnContador' onClick={(e) => this.handleClick(e, "Pasando Parametro desde un Evento")}> Saludar con parametro </button>

                {/* *****  Evento Personalizado  ***** */}
                <Boton myOnClick={(e) => this.handleClick(e, "Pasando Parametro desde un Evento Personalizado")} />

            </div>

        )
    }

}