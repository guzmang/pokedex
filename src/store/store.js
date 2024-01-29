import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './apis';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
      pokemons: pokemonSlice.reducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( pokemonApi.middleware )
})