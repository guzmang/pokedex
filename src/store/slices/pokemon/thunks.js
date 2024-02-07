import { setPokemons, startLoadingPokemons } from './pokemonSlice';
import { pokemonApi } from '../../../api/pokemonApi';


export const getPokemons = ( token = '', page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`/page/${page}`, {
            headers: {
                'x-token': token
            }
        });
        dispatch( setPokemons({ pokemons: data, page }) );
    }
}
