//  *******************************************************************************
//  **********  /01-react-basicos-cra/src/components/12-ScrollHooks.jsx  **********
//  *******************************************************************************


import { useState, useEffect } from "react";
import { Titulo } from "./Titulo";


export const ScrollHooks = ({titulo}) => {

    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState('Antonio');

    //console.clear();
    console.warn('-----  Hook  --  useEffect  -----');
    
    const detectarScroll = () => setScrollY(window.pageYOffset);


    //  -----  Moviendo el Scroll  --  Fase de Actualización  -----
    useEffect(() => {
    
        console.log('Moviendo el Scroll');
        window.addEventListener('scroll', detectarScroll);
    }, [scrollY]);


    //  -----  Fase de Actualización  -----
    useEffect(() => {
        console.log('Fase de Actualización');
    });


    //  -----  Fase de Montaje  -----
    useEffect(() => {
        console.log('Fase de Montaje');
    }, []);
    

    //  -----  Fase de Desmontaje  -----
    useEffect(() => {
        
        console.log('Fase de Desmontaje');
        return () => {
            window.removeEventListener('scroll', detectarScroll);
        };
    }, [scrollY]);


    


    return (

        <div className='componentes'>

            <Titulo nameTitulo="----------  12. Scroll hooks  --  Hook  -  useEffect  ----------" />

            <h2> Hooks - useEffect y el Ciclo de Vida </h2>
            <div className='scroll__container'>
                <p> Scroll Y del Navegador {scrollY}px </p>
            </div>
            

        </div>

    )

}
