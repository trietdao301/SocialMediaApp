import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import authReducer from './auth/authSlice'

export default configureStore({
    reducer: {
        //user: userReducer,
        auth: authReducer
    }
})