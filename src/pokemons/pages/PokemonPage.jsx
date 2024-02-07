import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pokemonApi } from '../../api/pokemonApi';

export const PokemonPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useSelector( state => state.auth );

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const getPokemon = async() => {
            try {
                const { data } = await pokemonApi.get(`/name/${id}`, {
                    headers: {
                        'x-token': token
                    }
                });
                setPokemon(data);
                setLoading(false);
                setNotFound(false);
            } catch (error) {
                console.error('Error getting pokemon:', error);
                setLoading(false);
                setNotFound(true);
            }
        };
        getPokemon();
    }, []);

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (notFound) {
        return (
            <>
                <h1>Pokemon Not Found</h1>
                <button 
                    className="btn btn-outline-primary"
                    onClick={ onNavigateBack }
                >
                    Back
                </button>
            </>
        )
    }

    return (
        <div className="row mt-5">
        <div className="col-4">
            <img 
            src={ pokemon.sprites.front_default } 
            alt={ pokemon.name }
            className="img-thumbnail animate__animated animate__fadeInLeft"
            />
        </div>

        <div className="col-8">
            <h3>{ pokemon.name }</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Height:</b> { pokemon.height } </li>
                <li className="list-group-item"> <b>Weight:</b> { pokemon.weight } </li>
                <li className="list-group-item"> <b>Base experience:</b> { pokemon.base_experience } </li>
            </ul>

            <h5 className="mt-3"> Stats </h5>
            <ul className="list-group list-group-flush">
            {
                pokemon.stats.map( ({ stat, base_stat }) => (
                    <li className="list-group-item" key = { stat.name }>
                        <b>{ stat.name }:</b> { base_stat }
                    </li>
                ))   
            }
            </ul>

            <h5 className="mt-3"> Types </h5>
            <ul className="list-group list-group-flush">
            {
                pokemon.types.map( ({ slot, type }) => (
                    <li className="list-group-item" key = { slot }>
                        <b>{ slot } - </b> { type.name }
                    </li>
                ))   
            }
            </ul>

            <h5 className="mt-3"> Moves </h5>
            <div>
            {
                pokemon.moves.map( ({ move }, index) => (
                    <span key={ move.name }>
                        { move.name }
                        { index < pokemon.moves.length - 1 && " - " }
                    </span>
                ))
            }
            </div>
            <br/>
            <button 
                className="btn btn-outline-primary"
                onClick={ onNavigateBack }
            >
                Back
            </button>

        </div>

        </div>
    )
}
