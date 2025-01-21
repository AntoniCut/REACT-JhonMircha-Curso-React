//  *********************************************************************************
//  **********  /01-react-basicos-cra/src/components/11-ContadorHooks.jsx  **********
//  *********************************************************************************


import { useState } from "react"
import { Titulo } from "./Titulo";


export const ContadorHooks = ({titulo}) => {

    const [contador, setContador] = useState(0);

    const restar = () => {
        if (contador === 0) return;
        setContador(contador - 1);
    }

    const sumar = () => setContador(contador + 1);
    
    const reset = () => setContador(0);


    return (

        <div className='componentes'>

            <Titulo nameTitulo="----------  11. Contador Hooks  --  Hook  -  useState  ----------" />

            <h2> Hooks- useState </h2>
            <div className='contador-container'>
                <button className='btnContador' onClick={restar}> - </button>
                <h3> {contador} </h3>
                <button className='btnContador' onClick={sumar}> + </button>
            </div>
            <button className='btnContador' onClick={reset}> reset </button>

            <p> Contador de {titulo} </p>

        </div>

    )

}

ContadorHooks.defaultProps = {

    titulo: 'Clips',
};
