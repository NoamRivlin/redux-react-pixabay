import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from '../features/gallery/gallerySlice';

// store is created with the gallery reducer to update the state
// the gallery reducer is created with the gallerySlice
// the gallerySlice is created with the initial state, reducers and extraReducers
// the initial state is an object with the images array, isLoading boolean, error string, pageNumber number and category string
// the reducers are setPageNumber and setCategory
// the extraReducers are to update the state asynchronously when fetchImagesAsync is pending, fulfilled or rejected
const store = configureStore({
    reducer: {
        gallery: galleryReducer,
    },
});

export default store;
