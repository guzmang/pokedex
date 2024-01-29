import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        dark: false,
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setDarkMode: ( state ) => {
            state.dark = !state.dark;
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setDarkMode, setPokemons } = pokemonSlice.actions;