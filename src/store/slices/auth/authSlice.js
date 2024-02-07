import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        token: ''
    },
    reducers: {
        login: ( state, action ) => {
            state.status = 'authenticated';
            state.token = action.payload;
        },
        logout: ( state ) => {
            state.status = 'not-authenticated'
            state.token = '';
        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;