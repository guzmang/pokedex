import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './apis';
import { pokemonSlice } from './slices/pokemon';
import { authSlice } from './slices/auth';

export const store = configureStore({
  reducer: {
      auth: authSlice.reducer,
      pokemons: pokemonSlice.reducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( pokemonApi.middleware )
})