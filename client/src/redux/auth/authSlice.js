import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { REACT_APP_SERVER_URL } from '../../config'
import { jwtDecode } from 'jwt-decode';


// import { useJwt } from "react-jwt";
// const token = "2f65cc8f811d49c49a9033fba19147fb0f0210644ad4f649c06e93f64d6d3f7d";
const backendApiUrl = REACT_APP_SERVER_URL;

console.log(backendApiUrl)
const token = localStorage.getItem("token");
const isTokenExpired = token ? jwtDecode(token).exp * 1000 < Date.now() : true;

const initialState = {
    loading: false,
    userInfo: {
        username: null,
        email: null,
        fullname: null
    }, // for user object
    userToken: isTokenExpired ? null : token, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
    isAuthorized: !isTokenExpired
}

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    console.log(credentials)
    const response = await fetch(`${backendApiUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthorized = true;
                state.userToken = action.payload.token; // Adjust the property based on your backend response
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.isAuthorized = false;
                state.error = action.payload ? action.payload.error : 'An error occurred';
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            });
    },
})
// export const { login } = authSlice.actions
export default authSlice.reducer