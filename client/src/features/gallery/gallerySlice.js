import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
// import { appDispatch, rootState } from '@/app/store.js';
import galleryService from './galleryService';

const initialState = {
    images: [],
    // app starts loading before app is rendered, so initial loading state is true
    isLoading: true,
    error: null,
    pageNumber: 1,
    // initial state of category is nature because there's NSFW images in the other categories
    category: 'Nature',
}

// async thunk to fetch images from the API 
export const fetchImagesAsync = createAsyncThunk('gallery/fetchImages', async ({ pageNumber, category }, thunkAPI) => {
    try {
        // we use the service to fetch images from the API 
        // we pass the page number and category as params to the service 
        // we return the response from the API
        // the response from the API is passed as the action.payload to the reducer
        // the reducer updates the state with the new images
        // the component that is subscribed to the state is re-rendered with the new images

        const response = await galleryService.fetchImages(pageNumber, category);
        return response;

    } catch (error) {
        // if there's an error, we return the error message
        // the error message is passed as the action.payload to the reducer
        // the reducer updates the state with the error message
        // rejectWithValue is a helper function that returns a rejected action with the specified value as payload
        return thunkAPI.rejectWithValue(error.message);
    }
})

const gallerySlice = createSlice({
    // name of the slice
    name: 'gallery',
    initialState,
    // reducers to update the state synchronously 
    reducers: {
        // setPageNumber is a reducer that updates the state with the new page number
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        // setCategory is a reducer that updates the state with the new category
        setCategory: (state, action) => {
            state.category = action.payload;
        },

    },
    // extraReducers to update the state asynchronously 
    extraReducers: (builder) => {
        builder
            // if fetchImagesAsync is pending, we update the state with isLoading = true
            .addCase(fetchImagesAsync.pending, (state) => {
                state.isLoading = true;
            })
            // if fetchImagesAsync is fulfilled, we update the state with isLoading = false and the new images
            .addCase(fetchImagesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.images = action.payload;
            })
            // if fetchImagesAsync is rejected, we update the state with isLoading = false and the error message
            .addCase(fetchImagesAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
})




export const { setPageNumber, setCategory } = gallerySlice.actions;
export default gallerySlice.reducer;