import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import ModalByImageId from './components/ImageModal';
import CategoryModal from './components/CategoryModal';




function App() {


  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  // to keep track of which image modal is open 
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  // initial state of category is nature because there's NSFW images in the other categories
  const [category, setCategory] = useState('nature');
  // all the categories that we can choose from
  const categories = ['sport', 'nature', 'animals', 'work', 'food', 'travel', 'music', 'science', 'education', 'health', 'people', 'religion', 'industry', 'computer', 'buildings', 'business', 'backgrounds', 'places', 'feelings', 'animals', 'plants', 'transportation', 'travel', 'religion', 'science', 'education', 'feelings', 'health', 'people', 'industry', 'computer', 'food', 'sports', 'transportation', 'buildings', 'business', 'music'];



  useEffect(() => {
    (async () => {
      await fetchImages();
    })();

  }, [pageNumber, category]);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/gallery/', {
        params: {
          page: pageNumber,
          q: category
        }
      });
      const fetchedImages = response.data;
      setImages(fetchedImages);

    } catch (error) {
      console.error('Failed to fetch images: ', error);
    }
  };

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
        <Box className='category-modal-container' mt={1}>
          <Button onClick={() => handleCategoryModalOpen()} variant='contained' >Choose Category</Button>
          <CategoryModal categories={categories} setCategory={handleCategoryChange} categoryModalOpen={categoryModalOpen} setCategoryModalOpen={setCategoryModalOpen} />
        </Box>

        <Box className='image-container' mt={1} >
          {/* Display the fetched images */}
          {images.length === 9 ? (images.map((image) => (
            <Box key={image.id}>
              <Button variant='outlined' onClick={() => {
                handleModalOpen(image.id);
              }} >
                <img src={image.webformatURL} alt={image.title} className='image' />
              </Button>
            </Box>

          ))) : (<Typography variant='h2' color={'white'} >Loading...</Typography>)}
        </Box>

        <ModalByImageId images={images} modalId={modalId} imageModalOpen={imageModalOpen} setImageModalOpen={setImageModalOpen} />
        <Box className='pagination' mt={2} >

          {/* Disable previous page button if we are on the first page */}
          <Button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1} variant='contained' >Previous</Button>
          <Button onClick={() => handlePageChange(pageNumber + 1)} variant='contained' >Next</Button>
          <Typography variant='h6' color={'white'} >Page {pageNumber}</Typography>
        </Box>

      </Box >
    </>
  );

}


export default App;
