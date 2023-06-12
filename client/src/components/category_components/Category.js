import { Box, Button, Typography } from '@mui/material';
import CategoryModal from './CategoryModal';
// import st
import "./style.css";

const Category = ({ handleCategoryModalOpen, handleCategoryChange, category, categoryModalOpen, setCategoryModalOpen }) => {
    return (
        <Box className='category-container' mt={1}>
            <Button onClick={() => handleCategoryModalOpen()} variant='contained' >Choose Category</Button>
            <Typography variant='h6' color={'white'} >Category: {category}</Typography>
            <CategoryModal setCategory={handleCategoryChange} categoryModalOpen={categoryModalOpen} setCategoryModalOpen={setCategoryModalOpen} />
        </Box>
    )
}

export default Category