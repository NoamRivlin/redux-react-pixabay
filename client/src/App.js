import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Box, Modal, Button } from '@mui/material';


function App() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  // initial state of category is nature because there's NSFW images in the other categories
  const [category, setCategory] = useState('nature');


  useEffect(() => {
    (async () => {
      await fetchImages();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await fetchImages();
    })();
  }, [page]);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/gallery/', {
        params: {
          page,
          category
        }

      });
      const fetchedImages = response.data;
      setImages(fetchedImages);
    } catch (error) {
      console.error('Failed to fetch images: ', error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  if (images.length === 9) {
    return (
      < >
        <Box className='container'>
          <Box className='category-modal-container' mt={2}>
            {/* <Button onClick={handleNextPage} variant='contained' >Choose Category</Button> */}
            asd
          </Box>
          <Box className='image-container' mt={2}>
            {/* Display the fetched images */}
            {images.map((image) => (
              <img key={image.id} src={image.webformatURL} alt={image.title} className='image' />
            ))}

          </Box>
          {/* Pagination controls */}
          <Box className='pagination' mt={2}>
            {/* Disable previous page button if we are on the first page */}
            <Button onClick={handlePreviousPage} disabled={page === 1} variant='contained' >Previous</Button>
            <Button onClick={handleNextPage} variant='contained' >Next</Button>
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

};

export default App;
