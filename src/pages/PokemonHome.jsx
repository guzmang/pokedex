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

        { page == 0 ?
          null :
          <button
            disabled={ isLoading }
            onClick={ () => dispatch( getPokemons(page - 1) ) }
          >
            Previous
          </button>
        }

        { page == 130 ?
          null :
          <button
            disabled={ isLoading }
            onClick={ () => dispatch( getPokemons(page + 1) ) }
          >
            Next
          </button>
        }
    </>
  )
}
