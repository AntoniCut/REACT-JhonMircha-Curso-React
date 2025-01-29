//  *********************************************************************************
//  **********  /01-react-basicos-cra/src/components/AjaxHooksFetch.jsx  ************
//  *********************************************************************************


import React, { useState, useEffect } from 'react';
import { Titulo } from './Titulo';


const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";


//  **********  Componente funcional para renderizar cada Pokémon  **********
const Pokemon = ({ name, avatar }) => {

    return (
        <figure className='pokemon'>
            <img src={avatar} alt={name} />
            <figcaption> {name} </figcaption>
        </figure>
    );
};


//  ********** Componente principal para hacer la solicitud AJAX y mostrar la lista de Pokémon  **********
export const AjaxHooksFetch = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
            getPokemonsWithFetch(); 
        }, 3000);
    
    }, []);

    
    //  -----  Petición con Fetch  -----
    const getPokemonsWithFetch = () => {

        fetch(url)

            .then((res) => res.json())

            .then((json) => {

                // Iteramos sobre los resultados y hacemos un fetch a la URL de cada Pokémon
                json.results.forEach((el) => {

                    fetch(el.url)

                        .then((res) => res.json())

                        .then((json) => {

                            // Creamos un objeto con la info del Pokémon
                            const pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default, // Imagen del Pokémon
                            };

                            // Actualizamos el estado con el nuevo Pokémon sin mutar el array original
                            setPokemons( ( pokemons ) => [...pokemons, pokemon] );
                            setLoading(false);
                        });
                });
            })

            .catch((error) => {
                console.error('Error al cargar los Pokémon:', error);
                setLoading(false); // Aseguramos que el estado de cargando se detenga en caso de error
            });

    }


    return (

        <div className='componentes'>

            <Titulo nameTitulo="----------  14. Peticiones Asincronas con Fetch - AJAX y APIS con Hooks ----------" />

            <h2> AJAX y APIS con Hooks - Fetch </h2>

            {
                loading
                    
                    ? (<p> Cargando Pokémon... </p>)

                    :
                    (
                        <div className='pokemons__container'>

                            {pokemons.length > 0 ?
                                (
                                    pokemons.map((pokemon, index) => (
                                        // Asegúrate de que `key` sea único
                                        <Pokemon
                                            key={pokemon.name || index}
                                            name={pokemon.name}
                                            avatar={pokemon.avatar}
                                        />
                                    ))
                                ) : (<p> No se encontraron Pokémon. </p>)
                            }
                        </div>
                    )
            }

        </div>
    );

}
