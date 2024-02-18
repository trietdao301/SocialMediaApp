import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { REACT_APP_SERVER_URL } from '../../config'
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'
const backendApiUrl = REACT_APP_SERVER_URL;

console.log(backendApiUrl)

let isTokenExpired = true;
try {
    const token = localStorage.getItem("token");
    isTokenExpired = jwtDecode(token).exp * 1000 < Date.now()
    console.log(isTokenExpired + " token ")
    console.log(jwtDecode(token).exp * 1000)
    console.log(Date.now())
    console.log(token)
}
catch (error) {

}

const initialState = {
    loading: false,
    userInfo: {
        username: null,
        email: null
    }, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
    isAuthorized: !isTokenExpired
}

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    //const navigate = useNavigate();
    console.log(credentials)
    const response = await fetch(`${backendApiUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) {
        // Handle non-successful responses here, if needed
        console.error('Login request failed:', response.status);
        throw new Error('Login failed');
    }
    //navigate('/');
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
                console.log("login sucess")
                state.userToken = action.payload.token; // Adjust the property based on your backend response
                state.userInfo = {
                    username: action.payload.username,
                    email: action.payload.email
                };
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                console.log("login reject")
                state.isAuthorized = false;
                localStorage.clear();
                state.error = action.payload ? action.payload.error : 'An error occurred';
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            });
    },
})
// export const { login } = authSlice.actions
export default authSlice.reducer