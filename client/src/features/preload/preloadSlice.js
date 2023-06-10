// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { fetchPreloadData } from './preloadServices.js';

// const initialState = {
//     data: null,
//     isLoading: false,
//     error: null,
// };

// export const fetchPreloadDataAsync = createAsyncThunk(
//     'preload/fetchData',
//     async () => {
//         const response = await fetchPreloadData();
//         return response;
//     }
// );

// const preloadSlice = createSlice({
//     name: 'preload',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchPreloadDataAsync.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(fetchPreloadDataAsync.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.data = action.payload;
//             })
//             .addCase(fetchPreloadDataAsync.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.error.message;
//             });
//     },
// });

// export default preloadSlice.reducer;
