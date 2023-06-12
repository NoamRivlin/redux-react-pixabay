import { Box, Button, Typography } from '@mui/material';
import "./style.css";


const ImageList = ({ images, handleImageModalOpen, isLoading, error }) => {
    return (
        <Box className='image-container' mt={1}>
            {
                // if loading is true display loading text
                isLoading ? (
                    // make it so that the loading text is centered and takes up the same space as the images
                    <Box sx={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='h2' color='white' >Loading...</Typography>
                    </Box>


                ) :
                    // if error is true display error text
                    error ? (
                        // make it so that the error text is centered and takes up the same space as the images
                        <Box sx={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h2' color='white'>{error}</Typography>
                        </Box>
                        // if no error or loading is true display images
                    ) : (
                        // map through the images and display them and each image has a button that opens the image modal
                        // the image modal is opened by passing the image id to the handleImageModalOpen function
                        // so the image modal knows which image to display 
                        images.map((image) => (
                            <Box key={image.id}>
                                <Button variant='outlined' onClick={() => handleImageModalOpen(image.id)}>
                                    <img src={image.webformatURL} alt={image.title} className='image' />
                                </Button>
                            </Box>
                        ))
                    )}
        </Box>
    );
}

export default ImageList;
