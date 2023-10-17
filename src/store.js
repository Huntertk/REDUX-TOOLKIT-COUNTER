import {configureStore} from '@reduxjs/toolkit'
import countReducer from './features/count/countSlice'

export const store = configureStore({
    reducer:{
        count: countReducer
    }
})