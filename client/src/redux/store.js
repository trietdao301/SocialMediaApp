import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import basketCounterReducer from './basketCount/basketCounterSlice';

export default configureStore({
    reducer: {
        //user: userReducer,
        auth: authReducer,
        basket: basketCounterReducer
    }
})