import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Box, Modal, Button, Typography, Fade, Backdrop } from '@mui/material';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#0987A0 ',
  borderRadius: '4px',
  boxShadow: 24,
  p: 5,
  display: 'flex',
  justifyContent: 'space-between',
};

function App() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  // to keep track of which image modal is open 
  const [imageModalOpen, setImageModalOpen] = useState(false);
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
  }, [page, category]);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/gallery/', {
        params: {
          page,
          q: category
        }

      });
      const fetchedImages = response.data;
      console.log('category', category);
      setImages(fetchedImages);

    } catch (error) {
      console.error('Failed to fetch images: ', error);
    }
  };





  if (images.length === 9) {
    return (
      < >
        <Box className='container'>
          <Box className='category-modal-container' mt={2}>
            <Button onClick={() => setCategoryModalOpen(true)} variant='contained' >Choose Category</Button>
            <Modal
              open={categoryModalOpen}
              onClose={() => {
                setCategoryModalOpen(false)
                console.log(categoryModalOpen);
                return
              }}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={categoryModalOpen}>
                {/* className='category-btn-container' */}
                <Box sx={modalStyle} >
                  <Button onClick={() => setCategory('sport')} variant='contained' >Sport</Button>
                  <Button onClick={() => setCategory('nature')} variant='contained' >Nature</Button>
                  <Button onClick={() => setCategory('animals')} variant='contained' >Animals</Button>
                  <Button onClick={() => setCategory('work')} variant='contained' >Work</Button>
                </Box>
              </Fade>
            </Modal>
          </Box>
          <Box className='image-container' mt={2}>
            {/* Display the fetched images */}
            {images.map((image, index) => (
              <Button variant='outlined' onClick={() => setImageModalOpen(image.id)} key={image.id}>
                <img key={image.id} src={image.webformatURL} alt={image.title} className='image' />

                <Modal
                  key={index}
                  open={imageModalOpen === image.id}
                  onClose={() => {
                    console.log(imageModalOpen);
                    return setImageModalOpen(false)
                  }}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,

                    },
                  }}
                >
                  <Fade in={imageModalOpen === image.id}>
                    {/* className='category-btn-container' */}
                    <Box sx={modalStyle} >
                      <p>
                        tags: {image.tags}
                        <br />
                        Views: {image.views}
                        <br />
                        Likes: {image.likes}
                        <br />
                        Number of comments {image.comments}
                        <br />
                        Number of downloads: {image.downloads}
                        <br />
                        Image URL: {image.pageURL}
                      </p>
                    </Box>
                  </Fade>
                </Modal>

              </Button>
            ))}

          </Box>
          {/* Pagination controls */}
          <Box className='pagination' mt={2}>
            {/* Disable previous page button if we are on the first page */}
            <Button onClick={() => setPage(page - 1)} disabled={page === 1} variant='contained' >Previous</Button>
            <Button onClick={() => setPage(page + 1)} variant='contained' >Next</Button>
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
