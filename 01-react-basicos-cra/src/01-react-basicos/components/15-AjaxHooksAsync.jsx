//  *********************************************************************************
//  **********  /01-react-basicos-cra/src/components/AjaxHooksAsync.jsx  ************
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
export const AjaxHooksAsync = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            getPokemonsWithAsync(url);
        }, 3000);

    }, []);


    //  -----  Petición con Fetch  -----
    const getPokemonsWithAsync = async (url) => {

        try {
            const res = await fetch(url);
            const json = await res.json();

            const pokemonPromises = json.results.map(async (el) => {
                
                const res = await fetch(el.url);
                const json = await res.json();
                
                return {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };
            });

            const pokemonData = await Promise.all(pokemonPromises);
            setPokemons(pokemonData);

        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        } finally {
            setLoading(false);
        }
    }


    return (

        <div className='componentes'>

            <Titulo nameTitulo="----------  15. Peticiones Asincronas con Fetch - AJAX y APIS con Hooks ----------" />

            <h2> AJAX y APIS con Hooks </h2>

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
