import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import axios from 'axios';

import { useForm } from '../../hooks/useForm';
import { PokemonCard } from '../components';

export const PokemonSearchByName = () => {

    const navigate = useNavigate();
    const location = useLocation();
  
    const { q = '' } = queryString.parse( location.search );
  
    const showSearch = (q.length === 0);
    
    const { searchText, onInputChange } = useForm({
      searchText: q
    }); 

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const { q } = queryString.parse(location.search);
        if (q) {
            const getPokemon = async() => {
                try {
                const { data } = await axios.get(`http://localhost:3000/api/name/${q}`);
                setPokemon(data);
                setLoading(false);
                } catch (error) {
                console.error('Error getting pokemon:', error);
                setLoading(false);
                }
            };
            getPokemon();
        }
    }, [location.search, loading]);

    const onSearchSubmit = (event) =>{
        event.preventDefault();
        setLoading(true);
        navigate(`?q=${ searchText }`);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <h1>Search</h1> 
        <hr />

        <div className="row">

            <div className="col-5">
                <h4>Searching</h4>
                <hr />
                <form onSubmit={ onSearchSubmit }>
                <input 
                    type="text"
                    placeholder="Search a Pokemon"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ onInputChange }
                />

                <button className="btn btn-outline-primary mt-1">
                    Search
                </button>
                </form>
            </div>

            <div className="col-7">
                <h4>Result</h4>
                <hr />
                
                <div className="alert alert-primary animate__animated animate__fadeIn" 
                    style={{ display: showSearch ? '' : 'none' }}>
                    Search a Pokemon
                </div>

                {
                    pokemon && <PokemonCard 
                                    key = { pokemon.id }
                                    id = { pokemon.id }
                                    name = { pokemon.name }
                                    sprites = { pokemon.sprites }
                                    stats = { pokemon.stats }
                                    types = { pokemon.types }
                                />
                }

            </div>
        </div>
    
        </>
    )
}
