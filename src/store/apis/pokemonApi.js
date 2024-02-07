import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({

    reducerPath: 'pokemon',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        prepareHeaders( headers, { getState }) {
            const token = getState().auth.token;
            if (token) {
              headers.set('x-token', token);
            }
            return headers;
        },
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

        getToken: builder.mutation({
            query: (data) => ({
              url: '/auth/login',
              method: 'POST',
              body: data,
            }),
        }),

    })

})

export const { useGetPokemonTypesQuery, useGetPokemonsByTypesQuery, useGetPokemonPageQuery, useGetPokemonsByNameQuery, useGetTokenMutation } = pokemonApi;