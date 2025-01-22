//  **********************************************************************
//  **********  /01-react-basicos-cra/01-react-basicos/App.jsx  **********
//  **********************************************************************


import React from 'react';
//import { ReactBasicosComponent } from './01-react-basicos/components/ReactBasicosComponent';
import { Header } from './01-react-basicos/components/Header';

import { SintaxisJSX } from './01-react-basicos/components/01-SintaxisJSX.jsx';
import { ComponenteClase, ComponenteFuncional, Componente } from './01-react-basicos/components/02-Componente.jsx';
import Propiedades from './01-react-basicos/components/03-Propiedades.jsx';
import Estado from './01-react-basicos/components/04-Estado.jsx';
import RenderizadoCondicional from './01-react-basicos/components/05-RenderizadoCondicional.jsx';
import RenderizadoElementos from './01-react-basicos/components/06-RenderizadoElementos.jsx';
import { EventosES6, EventosES7, MasSobreEventos } from './01-react-basicos/components/07-Eventos.jsx';
import { Padre } from './01-react-basicos/components/08-ComunicacionComponentes.jsx';
import { CicloVida } from './01-react-basicos/components/09-CicloVida.jsx';
import { AjaxApis } from './01-react-basicos/components/10-AjaxApis.jsx';
import { ContadorHooks } from './01-react-basicos/components/11-ContadorHooks.jsx';
import { ScrollHooks } from './01-react-basicos/components/12-ScrollHooks.jsx';
import { RelojHooks } from './01-react-basicos/components/13-RelojHooks.jsx';
import { AjaxHooksFetch } from './01-react-basicos/components/14-AjaxHooksFetch.jsx';
import { AjaxHooksAsync } from './01-react-basicos/components/15-AjaxHooksAsync.jsx';


export const App = () => {

    return (

        <div className="layout">

            <Header />

            <main className="layout__main">


                {/* **********  1. Sintaxis JSX  ********** */}
                <SintaxisJSX />
                

                {/* **********  2. COMPONENTES de Clase y Funcionales  ********** */}
                <ComponenteClase msg="Hola Soy un Componente de Clase" />
                <ComponenteFuncional msg="Hola Soy un Componente Funcional desde una Props" />
                <Componente msg="Soy un Componente Funcional expresado desde una Prop" />


                {/* **********  3. PROPIEDADES  ********** */}
                <Propiedades
                    cadena="Esto es una Cadena"
                    numero={19}
                    booleano={true}
                    arreglo={[1, 2, 3]}
                    objeto={{
                        nombre: 'Antonio',
                        correo: 'tonifrancuti@gmail.com'
                    }}
                    funcion={numero => numero * numero}
                    reactElement={<i> Esto es un Elemento de React - JSX </i>}
                    reactComponent={<Componente msg="Soy un Componente pasado como Prop" />}
                />


                {/* **********  4. ESTADO  ********** */}
                <Estado />


                {/* **********  5. RENDERIZADO CONDICIONAL  ********** */}
                <RenderizadoCondicional session={true} />


                {/* **********  6. RENDERIZADO DE ELEMENTOS  ********** */}
                <RenderizadoElementos />


                {/* **********  7. EVENTOS en Componente de Clase  ********** */}
                <EventosES6 />
                <EventosES7 />
                <MasSobreEventos />

                {/* **********  8. Comunicación entre Componentes  ********** */}
                <Padre />


                {/* **********  9. Ciclo de Vida de los Componentes  ********** */}
                <CicloVida />


                {/* **********  10. Peticiones Asincronas - AJAX y APIS  ********** */}
                <AjaxApis />


                {/* **********  11. useState  ********** */}
                <ContadorHooks titulo="seguidores" />


                {/* **********  12. useEffect  ********** */}
                <ScrollHooks />


                {/* **********  13. useEffect  ********** */}
                <RelojHooks />


                {/* **********  14. Peticiones Asincronas con Fetch - AJAX y APIS con Hooks  ********** */}
                <AjaxHooksFetch />


                {/* **********  15. Peticiones Asincronas con Async Await - AJAX y APIS con Hooks  ********** */}
                <AjaxHooksAsync />

            </main>

        </div>
    );
}
