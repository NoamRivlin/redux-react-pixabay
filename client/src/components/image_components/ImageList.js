import { Box, Button, Typography } from '@mui/material';
import "./style.css";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ModalByImageId from './ModalByImageId';


const ImageList = () => {

    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [imageModalId, setImageModalId] = useState(null);
    const handleImageModalOpen = (imageId) => {
        // Sets the modal image id to the image id that was clicked on 
        // so that the modal can display the image that was clicked on
        setImageModalId(imageId);
        // opens image modal
        setImageModalOpen(true);
    };
    const { images, isLoading, error } = useSelector((state) => state.gallery);

    if (isLoading) {
        return (// make it so that the loading text is centered and takes up the same space as the images
            <Box sx={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h2' color='white' >Loading...</Typography>
            </Box>)
    }
    if (error) {
        return (                        // make it so that the error text is centered and takes up the same space as the images
            <Box sx={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='h2' color='white'>{error}</Typography>
            </Box>
        )
    }

    return (
        <Box className='image-container' mt={1}>


            {/* // if error is true display error text
               
                        // map through the images and display them and each image has a button that opens the image modal
                        // the image modal is opened by passing the image id to the handleImageModalOpen function
                        // so the image modal knows which image to display  */}

            {images && images.map((image) => (
                <Box key={image.id}>
                    <Button variant='outlined' onClick={() => handleImageModalOpen(image.id)}>
                        <img src={image.webformatURL} alt={image.title} className='image' />
                    </Button>
                </Box>
            ))}
            <ModalByImageId imageModalOpen={imageModalOpen} setImageModalOpen={setImageModalOpen} imageModalId={imageModalId} />

        </Box>
    );
}

export default ImageList;
