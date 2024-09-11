//  **********************************************************************************
//  **********  /01-react-basicos-cra/src/components/HeaderComponent.jsx  ************
//  **********************************************************************************


import React from 'react';
import logo from '../../logo.svg';


export const HeaderComponent = () => {

    return (

        <header className="App-header">
            <div className='logo-link'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <h1 className="titulo-proyecto"> React Básicos con CRA </h1>
        </header>
    );
}


