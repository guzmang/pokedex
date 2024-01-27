import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../store/slices/pokemon';
import { PokemonList } from '../components';

export const PokemonHome = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );


  useEffect(() => {
    dispatch( getPokemons() );    
  }, [])
  

  return (
    <>
        <PokemonList pokemons={ pokemons }/>

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
