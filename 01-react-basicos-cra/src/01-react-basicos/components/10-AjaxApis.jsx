//  ***************************************************************************
//  **********  /01-react-basicos-cra/src/components/AjaxApis.jsx  ************
//  ***************************************************************************


import React, { Component } from 'react';
import { Titulo } from './Titulo';


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
export class AjaxApis extends Component {

    state = {
        pokemons: [],
        loading: true,
    };

    componentDidMount() {

        const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";

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
                            this.setState((prevState) => ({
                                pokemons: [...prevState.pokemons, pokemon],
                                loading: false, // Una vez cargados los Pokémon, quitamos el estado de cargando
                            }));
                        });
                });
            })

            .catch((error) => {
                console.error('Error al cargar los Pokémon:', error);
                this.setState({ loading: false }); // Aseguramos que el estado de cargando se detenga en caso de error
            });
    }


    render() {

        return (

            <div className='componentes'>

                <Titulo nameTitulo="----------  10. Peticiones Asincronas - AJAX y APIS en Componentes de Clase ----------" />

                <h2> AJAX y APIS </h2>

                {
                    this.state.loading
                        
                        ? (<p> Cargando Pokémon... </p>)
                        
                        :
                        (
                            <div className='pokemons__container'>
                                
                                {this.state.pokemons.length > 0 ?
                                    (
                                        this.state.pokemons.map((pokemon, index) => (
                                            // Asegúrate de que `key` sea único
                                            <Pokemon 
                                                key={pokemon.id || index} 
                                                name={pokemon.name} 
                                                avatar={pokemon.avatar}
                                            />
                                        ))
                                    ) : (<p> No se encontraron Pokémon. </p>)
                                }
                            </div>
                        )}

            </div>
        );
    }
}
