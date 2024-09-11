//  ***************************************************************************************
//  **********  /01-react-basicos-cra/src/components/RenderizadoElementos.jsx  ************
//  ***************************************************************************************


import { Titulo } from './Titulo';
import { ComponenteClase, ComponenteFuncional, Componente } from '././Componente';
import Propiedades from './Propiedades.jsx';
import Estado from './Estado.jsx';
import RenderizadoCondicional from './RenderizadoCondicional.jsx';
import RenderizadoElementos from './RenderizadoElementos.jsx';
import { EventosES6, EventosES7, MasSobreEventos } from './Eventos.jsx';
import { Padre } from './ComunicacionComponentes.jsx';


export const ReactBasicosComponent = () => {


    const nombre = 'Antonio';
    const auth = true;

    const estaciones = [
        'Primavera',
        'Verano',
        'Otoño',
        'Invierno'
    ];


    return (

        <main className="App-main">


            {/* **********  1. Sintaxis JSX  ********** */}
            <Titulo nameTitulo="----------  1. Sintaxis JSX  ----------" />
            
            <div className='componentes'>
                <label> <h2> Nombre </h2> </label> <br />
                <input type="text" /> <br /> <br />

                <h2> {nombre} </h2>
                <p> {auth ? "El usuario esta Logeado" : "El usuario No esta Logeado"}</p>

                <br /> <p> {2 + 1} </p> <br />

                <ul>
                    {estaciones.map((estacion, index) => <li key={index}> {estacion} </li>)}
                </ul>

            </div>


            {/* **********  2. COMPONENTES de Clase y Funcionales  ********** */}
            <Titulo nameTitulo="----------  2. Componentes de Clase y Funcionales  ----------" />

            <ComponenteClase msg="Hola Soy un Componente de Clase" />
            <ComponenteFuncional msg="Hola Soy un Componente Funcional desde una Props" />
            <Componente msg="Soy un Componente Funcional expresado desde una Prop" />


            {/* **********  3. PROPIEDADES  ********** */}
            <Titulo nameTitulo="----------  3. Propiedades  ----------" />

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
            <Titulo nameTitulo="----------  4. El Estado  ----------" />
            <Estado />


            {/* **********  5. RENDERIZADO CONDICIONAL  ********** */}
            <Titulo nameTitulo="----------  5. Renderizado Condicional  ----------" />
            <RenderizadoCondicional session={true} />


            {/* **********  6. RENDERIZADO DE ELEMENTOS  ********** */}
            <Titulo nameTitulo="----------  6. Renderizado de Elementos  ----------" />
            <RenderizadoElementos />


            {/* **********  7. EVENTOS en Componente de Clase  ********** */}
            <Titulo nameTitulo="----------  7. Eventos en Componentes de Clase  ----------" />
            <EventosES6 />
            <EventosES7 />
            <MasSobreEventos />

            {/* **********  8. Comunicación entre Componentes  ********** */}
            <Titulo nameTitulo="----------  8. Comunicación entre Componentes  ----------" />
            <Padre />

        </main>
    )
}