import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/pokemon';

export const PokemonHome = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );


  useEffect(() => {
    dispatch( getPokemons() );    
  }, [])
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True': 'False' }</span>

        <ul>
          {
            pokemons.map( ({ name, sprites }) => (
              <>
                <li key={ name }>{ name }</li>
                <img src={ sprites.front_default} alt={`${name} - Front`} />
              </>
            ))
          }
        </ul>

        <button
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons(page) ) }
        >
          Next
        </button>
    </>
  )
}
