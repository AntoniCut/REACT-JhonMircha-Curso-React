//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Titulo } from './components/Titulo.jsx';
import { ComponenteClase, ComponenteFuncional, Componente } from './components/Componente.jsx';


function App() {

   const nombre = 'Antonio';
   const auth = true;

   const estaciones = [
      'Primavera',
      'Verano',
      'Otoño',
      'Invierno'
   ];

   return (
      
      <div className="App">

         <header className="App-header">

            <div className='logo-link'>
               <img src={logo} className="App-logo" alt="logo" />
               <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> React </a>
            </div>

            <h1 className="titulo-proyecto"> React Básicos con CRA </h1>

         </header>


         <main className="App-main">


            {/* **********  1. Sintaxis JSX  ********** */}
            <Titulo nameTitulo="----------  1. Sintaxis JSX  ----------" />

            <label> <h2> Nombre </h2> </label> <br />
            <input type="text" /> <br /> <br />

            <h2> {nombre} </h2>
            <p> {auth ? "El usuario esta Logeado" : "El usuario No esta Logeado"}</p>

            <br /> <p> {2 + 1} </p> <br />

            <ul>
               {estaciones.map((estacion, index) => <li key={index}> {estacion} </li>)}
            </ul>


            {/* **********  2. Componentes de Clase y Funcionales  ********** */}
            <Titulo nameTitulo="----------  2. Componentes de Clase y Funcionales  ----------" />

            <ComponenteClase msg="Hola Soy un Componente de Clase" />
            <ComponenteFuncional msg="Hola Soy un Componente Funcional desde una Props" />
            <Componente msg="Soy un Componente Funcional expresado desde una Prop" />






         </main>

      </div>
   );
}

export default App;
