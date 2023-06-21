import { Box, Button, Typography } from '@mui/material';
import CategoryModal from './CategoryModal';
import "./style.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { setCategory, setPageNumber } from '../../features/gallery/gallerySlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Category = () => {


    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const { category } = useSelector((state) => state.gallery);

    return (
        <Box className='category-container' mt={1}>
            <Button onClick={() => setCategoryModalOpen(true)} variant='contained' >Choose Category</Button>
            <Typography variant='h6' color={'white'} >Category: {category}</Typography>
            <CategoryModal categoryModalOpen={categoryModalOpen} setCategoryModalOpen={setCategoryModalOpen} />
        </Box>
    )
}

export default Category