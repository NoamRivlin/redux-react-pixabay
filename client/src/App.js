import { useEffect, useState } from 'react';
import './App.css';
import { Box, } from '@mui/material';
import ModalByImageId from './components/image_components/ModalByImageId';
import ImageList from './components/image_components/ImageList';
import Pagination from './components/pagination/Pagination';
import Category from './components/category_components/Category';
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber, setCategory, fetchImagesAsync } from './features/gallery/gallerySlice';




function App() {

  // we use the useDispatch hook to dispatch actions to the redux store
  const dispatch = useDispatch();

  // state setup 
  // we use the useState hook to set the state of the category modal and image modal
  // we pass the state as props to the components that need it
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageModalId, setImageModalId] = useState(null);

  // events handlers the change gallery state and trigger useEffect hook to fetch images from the API 

  const handleCategoryChange = (newCategory) => {
    // Updates the state of category in the Redux store and resets the page number to 1
    dispatch(setPageNumber(1))
    dispatch(setCategory(newCategory))
  };

  // modal handlers
  const handleImageModalOpen = (imageId) => {
    // Sets the modal image id to the image id that was clicked on 
    // so that the modal can display the image that was clicked on
    setImageModalId(imageId);
    // opens image modal
    setImageModalOpen(true);
  };

  const handleCategoryModalOpen = () => {
    // opens category modal
    setCategoryModalOpen(true);
  };

  // redux state setup 
  // we destructure the state from the redux store
  // we use the useSelector hook to get the state from the redux store
  // we pass the state as props to the components that need it

  const { images, isLoading, error, pageNumber, category } = useSelector((state) => state.gallery);

  //  useEffect hook to fetch images from the API when the page loads and number or category changes 
  useEffect(() => {
    // we use the useDispatch hook to dispatch actions to the redux store
    dispatch(fetchImagesAsync({ pageNumber, category }))
  }, [pageNumber, category]);



  return (
    < >
      <Box className='container'>
        <Category handleCategoryModalOpen={handleCategoryModalOpen}
          handleCategoryChange={handleCategoryChange} category={category} categoryModalOpen={categoryModalOpen} setCategoryModalOpen={setCategoryModalOpen} />

        <ImageList images={images} handleImageModalOpen={handleImageModalOpen} isLoading={isLoading} error={error} />


        <ModalByImageId images={images} imageModalId={imageModalId} imageModalOpen={imageModalOpen} setImageModalOpen={setImageModalOpen} />


        <Pagination />

      </Box >
    </>
  );

}


export default App;
