import { Box, Button, Typography } from '@mui/material';
import "./style.css";
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber } from './../../features/gallery/gallerySlice';

const Pagination = () => {

    const dispatch = useDispatch();

    const { pageNumber } = useSelector((state) => state.gallery);
    const handlePageChange = (newPageNumber) => {
        // Updates the current page number in the Redux store
        dispatch(setPageNumber(newPageNumber))
    };


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