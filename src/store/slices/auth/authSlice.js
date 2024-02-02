import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated'
    },
    reducers: {
        login: ( state ) => {
            state.status = 'authenticated'
        },
        logout: ( state ) => {
            state.status = 'not-authenticated'
        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;