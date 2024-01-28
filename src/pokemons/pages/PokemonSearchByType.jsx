import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const PokemonSearchByType = () => {

    const [types, setTypes] = useState([{'name': '-'}]);
    const [option, setOption] = useState('-');
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTypes = async() => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/type`);
            setTypes([ ...types, ...data.results]);
            setLoading(false);
        } catch (error) {
            console.error('Error getting types:', error);
            setLoading(false);
        }
        };
        getTypes();
    }, []);

    useEffect(() => {
        if(option == '-') {
            setPokemons([]);
            return;
        }

        const getPokemons = async() => {
            try {
                const { data } = await axios.get(`http://localhost:3000/api/type/${option}`);
                setPokemons(data);
                setLoading(false);
            } catch (error) {
                console.error('Error getting types:', error);
                setLoading(false);
            }
            };
        getPokemons();
    }, [option]);

    const onHandleChange = (e) => {
        setOption(e.target.value)
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
                        <b>{ index + 1 }:</b> { pokemon.name }
                    </li>
                ))   
            }
            </ul>
        </>
    );

}