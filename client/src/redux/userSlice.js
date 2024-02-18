import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        fullname: null,
        username: null,
        password: null,
        email: null,
        isAuthenticated: false,

    },
    reducers: {
        login: (state, action) => {
            state.fullname = action.payload.fullname;
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        logout: state => {
            state.fullname = null;
            state.username = null;
            state.password = null;
            state.email = null;
            state.isAuthenticated = false;
        },

    }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer