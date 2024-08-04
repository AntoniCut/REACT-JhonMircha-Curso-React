//  ******************************************************************
//  **********  /src/components/RenderizadoCondicional.jsx  **********
//  ******************************************************************


import React, {Component} from "react";


export default class RenderizadoCondicional extends Component {

    constructor(props) {
        super(props);
        this.state = {
            session: props.session
        }
    }

    render() {
        return(
            <div>
                <h2> Renderizado Condicional </h2>
                
                {/* -----  Renderizado Condicional  ----- */}
                { this.state.session ? <Login /> : <Logout /> } 
                                                
            </div>
        )
    }
}


function Login() {
    return(
        <div>
            <h3> Login </h3>
        </div>
    )
}


function Logout() {
    return(
        <div>
            <h3> Logout </h3>
        </div>
    )
}