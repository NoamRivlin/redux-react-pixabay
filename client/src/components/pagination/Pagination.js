import { Box, Button, Typography } from '@mui/material';
import "./style.css";
import { useSelector, useDispatch } from 'react-redux';
import { fetchImagesAsync, setPageNumber } from './../../features/gallery/gallerySlice';
import { useEffect } from 'react';

const Pagination = () => {

    const dispatch = useDispatch();

    const { pageNumber, category } = useSelector((state) => state.gallery);
    const handlePageChange = (newPageNumber) => {
        // Updates the current page number in the Redux store
        dispatch(setPageNumber(newPageNumber))
    };
    useEffect(() => {
        // we use the useDispatch hook to dispatch actions to the redux store
        dispatch(fetchImagesAsync({ pageNumber, category }))
    }, [pageNumber, category]);

    return (
        <Box className='pagination' mt={2} >
            {/* Disable previous page button if we are on the first page */}
            <Button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1} variant='contained' >Previous</Button>
            <Button onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === 56} variant='contained' >Next</Button>
            <Typography variant='h6' color={'white'} >Page {pageNumber}</Typography>
        </Box>
    )
}

export default Pagination