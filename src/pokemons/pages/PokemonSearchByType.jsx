import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pokemonApi } from '../../api/pokemonApi';
import { useGetPokemonTypesQuery } from '../../store/apis';

export const PokemonSearchByType = () => {

    const { data: resultsTypes, isLoading: loading } = useGetPokemonTypesQuery();

    const [option, setOption] = useState('-');
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if(option == '-') {
            setPokemons([]);
            return;
        }

        const getPokemons = async() => {
            try {
                const { data } = await pokemonApi.get(`/type/${option}`);
                setPokemons(data);
            } catch (error) {
                console.error('Error getting pokemons with choosen type:', error);
            }
            };
        getPokemons();
    }, [option]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const types = [{'name': '-'}, ...resultsTypes];

    const onHandleChange = (e) => {
        setOption(e.target.value)
    };
    
    return (
        <>
            <div>
                <h1>Choose a type:</h1>
                <select onChange={ onHandleChange }>
                    {types.map(({ name }, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
            </div>

            <h5 className="mt-3"> Results </h5>
            <ul className="list-group list-group-flush">
            {
                pokemons.map( ({ pokemon }, index) => (
                    <li className="list-group-item" key = { pokemon.name }>
                        <b>{ index + 1 }:</b> { pokemon.name } { " - " }
                        <Link to={`/pokemon/${ pokemon.url.match(/\/(\d+)\/$/)[1] }`}>
                            More...
                        </Link>
                    </li>
                ))   
            }
            </ul>
        </>
    );

}