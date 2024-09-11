//  **********************************************************************
//  **********  /01-react-basicos-cra/01-react-basicos/App.jsx  **********
//  **********************************************************************


import React from 'react';
import './App.css';
import { HeaderComponent } from './01-react-basicos/components/HeaderComponent';
import { ReactBasicosComponent } from './01-react-basicos/components/ReactBasicosComponent';



export const App = () => {

    return (

        <div className="App">
            
            <HeaderComponent />

            <ReactBasicosComponent />
            
        </div>
    );
}
