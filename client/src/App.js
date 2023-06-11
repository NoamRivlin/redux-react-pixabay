import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Box, Button, Dialog, DialogContent } from '@mui/material';



const categoryModalStyle = {
  bgcolor: '#0987A0 ',
  borderRadius: '4px',
  p: 5,
  gap: '15px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  height: '100%',

}

function App() {


  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  // to keep track of which image modal is open 
  const [imageModalOpen, setImageModalOpen] = useState(false);
  // initial state of category is nature because there's NSFW images in the other categories
  const [category, setCategory] = useState('nature');
  const categories = ['sport', 'nature', 'animals', 'work', 'food', 'travel', 'music', 'science', 'education', 'health', 'people', 'religion', 'industry', 'computer', 'buildings', 'business', 'backgrounds', 'places', 'feelings', 'animals', 'plants', 'transportation', 'travel', 'religion', 'science', 'education', 'feelings', 'health', 'people', 'industry', 'computer', 'food', 'sports', 'transportation', 'buildings', 'business', 'music'];


  useEffect(() => {
    (async () => {
      await fetchImages();
    })();
  }, []);

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
      // const response = await axios.get(`http://localhost:5000/api/gallery/`)
      console.log('response.params', response.path);
      const fetchedImages = response.data;
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
            <Dialog open={categoryModalOpen} onClose={() => setCategoryModalOpen(false)} maxWidth={'lg'}>
              <DialogContent sx={categoryModalStyle}  >
                {categories.map((category, index) => (
                  <Button onClick={() => setCategory(category)} variant='contained' key={index}>{category}</Button>
                ))}
              </DialogContent>
            </Dialog>
          </Box>

          <Box className='image-container' mt={2} >
            {/* Display the fetched images */}
            {images.map((image, index) => (
              <Box key={image.id}>
                <Button variant='outlined' onClick={() => setImageModalOpen(image.id)} key={image.id}>
                  <img src={image.webformatURL} alt={image.title} className='image' />
                </Button>

                <Dialog open={imageModalOpen === image.id} onClose={() => {
                  setImageModalOpen(false)
                }} maxWidth={'lg'} >
                  <DialogContent sx={{
                    bgcolor: '#0987A0 ',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    p: 5,
                    gap: '10px',
                    justifyContent: 'space-between',
                  }}
                  >
                    <img src={image.webformatURL} alt={image.title} className='image' />
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
                  </DialogContent>
                </Dialog>
              </Box>

            ))}
          </Box>

          {/* Pagination controls */}
          <Box className='pagination' mt={2}>
            {/* Disable previous page button if we are on the first page */}
            <Button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1} variant='contained' >Previous</Button>
            <Button onClick={() => setPageNumber(pageNumber + 1)} variant='contained' >Next</Button>
          </Box>

        </Box >
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
