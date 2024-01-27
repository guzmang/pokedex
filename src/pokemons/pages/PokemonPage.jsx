import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const PokemonPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async() => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/name/${id}`);
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error('Error getting pokemon:', error);
        setLoading(false);
      }
    };
    getPokemon();
    console.log("pok", pokemon);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
        {
            pokemon.moves.map( ({ move }) => (
                <li className="list-group-item" key = { move.name }>
                    <b>{ move.name } </b>
                </li>
            ))   
        }

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
