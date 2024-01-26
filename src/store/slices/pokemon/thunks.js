import { pokemonApi } from '../../../api/pokemonApi';
import axios from 'axios';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';



export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await axios.get("http://localhost:3000/api");
        dispatch( setPokemons({ pokemons: data, page: page + 1 }) );
    }
}
