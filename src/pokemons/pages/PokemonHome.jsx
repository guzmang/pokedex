import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../store/slices/pokemon';
import { PokemonList } from '../components';

export const PokemonHome = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );


  useEffect(() => {
    dispatch( getPokemons(page) );    
  }, [])
  

  return (
    <>
        <PokemonList pokemons={ pokemons }/>
        <div style={{ 
            marginTop: '20px', 
            marginBottom: '20px' 
          }}>

          { page == 0 ?
            null :
            <button
              className="btn btn-outline-primary mr-2"
              style={{ marginRight: '20px' }}
              disabled={ isLoading }
              onClick={ () => dispatch( getPokemons(page - 1) ) }
            >
              Previous
            </button>
          }

          { page == 130 ?
            null :
            <button
            className="btn btn-outline-primary"
              disabled={ isLoading }
              onClick={ () => dispatch( getPokemons(page + 1) ) }
            >
              Next
            </button>
          }

        </div>
    </>
  )
}
