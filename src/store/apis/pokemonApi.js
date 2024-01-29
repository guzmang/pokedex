import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({

    reducerPath: 'pokemon',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api'
    }),

    endpoints: (builder) => ({

        getPokemonTypes: builder.query({
            query: () => '/types'
        }),

        getPokemonsByTypes: builder.query({
            query: (option) => `/type/${ option }`
        }),

        getPokemonPage: builder.query({
            query: (page) => `/page/${ page }`
        }),

        getPokemonsByName: builder.query({
            query: (name) => `/name/${ name }`
        }),

    })

})

export const { useGetPokemonTypesQuery, useGetPokemonsByTypesQuery, useGetPokemonPageQuery, useGetPokemonsByNameQuery } = pokemonApi;