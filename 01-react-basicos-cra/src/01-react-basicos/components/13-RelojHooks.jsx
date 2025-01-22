//  ******************************************************************************
//  **********  /01-react-basicos-cra/src/components/13-RelojHooks.jsx  **********
//  ******************************************************************************


import { useState, useEffect } from "react";
import { Titulo } from "./Titulo";


//  -----  Componente que muestra la hora actual  -----
const Reloj = ({hora}) => <h3 className="reloj"> Reloj {hora} </h3>


//  -----  Componente RelojHooks  -----
export const RelojHooks = ({ titulo }) => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    const ticTac = (valor) => setVisible(valor);

    useEffect(() => {

        let temporizador;

        if (visible) temporizador = setInterval(() => { setHora( new Date().toLocaleTimeString() ) }, 1000);
        else clearInterval(temporizador);
        
        return () => {
            clearInterval(temporizador);
            console.log('Fase de Desmontaje - Reloj Detenido');
        }

    }, [visible]);

    
    return (

        <div className='componentes'>

            <Titulo nameTitulo="----------  13. Reloj hooks  --  Hook  -  useEffect  ----------" />

            <h2> Reloj - useEffect </h2>

            <span className='reloj__container'> { visible && <Reloj hora={hora} /> } </span>

            <div className='btns__container'>
                <button className='btnContador' onClick={ () => ticTac(true) }> Iniciar </button>
                <button className='btnContador' onClick={() => ticTac(false) }> Detener </button>
            </div>

        </div>
    )

}
