import { createSlice } from '@reduxjs/toolkit'


export const basketCounterSlice = createSlice({
    name: 'basketCounterSlice',
    initialState: {
        basket: [],
        user: null,
        total: 0.0
    },
    reducers: {
        addBasket: (state, action) => {
            const isExistedItem = state.basket.some(item => item.id === action.payload.id);
            if (isExistedItem) {

            }
            else {
                state.basket = [...state.basket, action.payload];
                state.total += action.payload.price;
            }

            console.log(action.payload.id)
        },
        removeBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload.id);

            state.total = Number(state.total).toFixed(2) - Number(action.payload.price).toFixed(2);
        }
    }
})

// Action creators are generated for each case reducer function
export const { addBasket, removeBasket } = basketCounterSlice.actions

export default basketCounterSlice.reducer