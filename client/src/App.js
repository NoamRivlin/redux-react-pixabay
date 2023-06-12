import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import ModalByImageId from './components/ImageModal';
import CategoryModal from './components/CategoryModal';
import ImageList from './components/ImageList';
import Pagination from './components/Pagination';
import useImageFetcher from './components/useImageFetcher';




function App() {

  // const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  // initial state of category is nature because there's NSFW images in the other categories
  const [category, setCategory] = useState('Nature');

  const { images, isLoading, error } = useImageFetcher({ category, pageNumber });



  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handleModalOpen = (imageId) => {
    setModalId(imageId);
    setImageModalOpen(true);
  };

  const handleCategoryModalOpen = () => {
    setCategoryModalOpen(true);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPageNumber(1);
  };

  return (
    < >
      <Box className='container'>
        <Box className='category-container' mt={1}>
          <Button onClick={() => handleCategoryModalOpen()} variant='contained' >Choose Category</Button>
          <Typography variant='h6' color={'white'} >Category: {category}</Typography>
          <CategoryModal setCategory={handleCategoryChange} categoryModalOpen={categoryModalOpen} setCategoryModalOpen={setCategoryModalOpen} />
        </Box>

        <ImageList images={images} onImageClick={handleModalOpen} isLoading={isLoading} error={error} />
        {/* <ImageList images={images} onImageClick={handleModalOpen} isLoading={images.length !== 9} error={!images.length} /> */}

        <ModalByImageId images={images} modalId={modalId} imageModalOpen={imageModalOpen} setImageModalOpen={setImageModalOpen} />


        <Pagination handlePageChange={handlePageChange} pageNumber={pageNumber} />

      </Box >
    </>
  );

}


export default App;
