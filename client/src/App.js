import { useState } from 'react';
import './App.css';
import { Box, } from '@mui/material';
import ModalByImageId from './components/image_components/ModalByImageId';
import ImageList from './components/image_components/ImageList';
import Pagination from './components/pagination/Pagination';
import useImageFetcher from './utils/useImageFetcher';
import Category from './components/category_components/Category';




function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageModalId, setImageModalId] = useState(null);
  // initial state of category is nature because there's NSFW images in the other categories
  const [category, setCategory] = useState('Nature');

  const { images, isLoading, error } = useImageFetcher({ category, pageNumber });



  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handleImageModalOpen = (imageId) => {
    setImageModalId(imageId);
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

        <Category handleCategoryModalOpen={handleCategoryModalOpen} handleCategoryChange={handleCategoryChange} category={category} categoryModalOpen={categoryModalOpen} setCategoryModalOpen={setCategoryModalOpen} />

        <ImageList images={images} onImageClick={handleImageModalOpen} isLoading={isLoading} error={error} />


        <ModalByImageId images={images} imageModalId={imageModalId} imageModalOpen={imageModalOpen} setImageModalOpen={setImageModalOpen} />


        <Pagination handlePageChange={handlePageChange} pageNumber={pageNumber} />

      </Box >
    </>
  );

}


export default App;
