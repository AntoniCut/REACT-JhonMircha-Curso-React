//  **********************************************************************
//  **********  /01-react-basicos-cra/src/hooks/useFetch.jsx  ************
//  **********************************************************************


import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`Error: ${res.status} - ${res.statusText}`);

                const rawData = await res.json();

                // Obtener detalles de cada Pokémon para su imagen
                const pokemonDetails = await Promise.all(
                    rawData.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url); // Obtener detalles del Pokémon
                        const details = await res.json();
                        return {
                            name: pokemon.name,
                            avatar: details.sprites.front_default, // URL de la imagen
                        };
                    })
                );

                setData(pokemonDetails);
                setIsPending(false);
                setError(null);
            } catch (err) {
                console.error("Error fetching Pokémon:", err);
                setError(err);
                setIsPending(false);
            }
        };

        getData();
    }, [url]);

    return { data, isPending, error };
};


// import { useState, useEffect } from 'react';


// export const useFetch = (url) => {

//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {

//         setTimeout(() => {
//             getData(url);
//         }, 3000);

//     }, [url]);


//     //  -----  Petición con Fetch  -----
//     const getData = async (url) => {

//         try {

//             const res = await fetch(url);

//             if(!res.ok) {
//                 throw { 
//                     err: true,
//                     status: res.status,
//                     statusText: !res.statusText ? "Ocurrió un error" : res.statusText
//                 };
//             }

//             const data = await res.json();

//             setIsPending(false);
//             setData(data);
//             setError({ err: false });

            
//         } catch (err) {
            
//             console.error("Error fetching Pokémon:", err);
//             setError(err);
//             setIsPending(false); // ✅ La petición terminó, aunque con error
        
//         } 
//     }


//     return {
//         data,
//         isPending,
//         error
//     };

// }
