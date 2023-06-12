import { Box, Button, Typography } from '@mui/material';
import CategoryModal from './CategoryModal';
import "./style.css";

const Category = ({ handleCategoryModalOpen, handleCategoryChange, category, categoryModalOpen, setCategoryModalOpen }) => {
    // props are passed from App.js
    // we use the props to pass the state and event handlers to the components that need them
    return (
        <Box className='category-container' mt={1}>
            <Button onClick={() => handleCategoryModalOpen()} variant='contained' >Choose Category</Button>
            <Typography variant='h6' color={'white'} >Category: {category}</Typography>
            <CategoryModal handleCategoryChange={handleCategoryChange} categoryModalOpen={categoryModalOpen} setCategoryModalOpen={setCategoryModalOpen} />
        </Box>
    )
}

export default Category