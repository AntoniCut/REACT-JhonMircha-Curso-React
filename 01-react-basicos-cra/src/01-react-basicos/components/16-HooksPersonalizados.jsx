//  **************************************************************************************
//  **********  /01-react-basicos-cra/src/components/HooksPersonalizados.jsx  ************
//  **************************************************************************************


import { useFetch } from '../../hooks/useFetch';
import { Titulo } from './Titulo';


const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";


const Pokemon = ({ name, avatar }) => (
    <figure className='pokemon'>
        <img src={avatar} alt={name} />
        <figcaption> {name} </figcaption>
    </figure>
);


export const HooksPersonalizados = () => {

    const { data: pokemons, isPending, error } = useFetch(url);

    //const pokemons = data?.results || [];
    

    return (
        
        <div className='componentes'>
            
            <Titulo nameTitulo="----------  16. Hooks Personalizados - Custom Hooks ----------" />
            <h2> HOOKS Personalizados </h2>

            {
                isPending ? (
                    <p> Cargando Pokémon... </p>
                ) : error ? (
                    <p> Ocurrió un error: {error.message} </p>
                ) : (
                    <div className='pokemons__container'>
                        {pokemons.length > 0 ? (
                            pokemons.map((pokemon, index) => (
                                <Pokemon key={index} name={pokemon.name} avatar={pokemon.avatar} />
                            ))
                        ) : (
                            <p> No se encontraron Pokémon. </p>
                        )}
                    </div>
                )
            }
            
        </div>
    );
}