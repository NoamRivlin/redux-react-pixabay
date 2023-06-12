import { Box, Button, Typography } from '@mui/material';
import "./style.css";


const Pagination = ({ handlePageChange, pageNumber }) => {
    return (
        <Box className='pagination' mt={2} >
            {/* Disable previous page button if we are on the first page */}
            <Button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1} variant='contained' >Previous</Button>
            <Button onClick={() => handlePageChange(pageNumber + 1)} variant='contained' >Next</Button>
            <Typography variant='h6' color={'white'} >Page {pageNumber}</Typography>
        </Box>
    )
}

export default Pagination