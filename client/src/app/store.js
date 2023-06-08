import { configureStore } from '@reduxjs/toolkit';
import preloadReducer from './features/preload/preloadSlice';

const store = configureStore({
    reducer: {
        preload: preloadReducer,

    },
});

export default store;
