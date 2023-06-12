import { Box, Button, Typography } from '@mui/material';

function ImageList({ images, onImageClick, isLoading, error }) {
    return (
        <Box className='image-container' mt={1}>
            {isLoading ? (
                // make it so that the loading text is centered and takes up the same space as the images
                <Box sx={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Typography variant='h2' color='white' >Loading...</Typography>
                </Box>
            ) : error ? (
                <Box sx={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h2' color='white'>{error}</Typography>
                </Box>
            ) : (
                images.map((image) => (
                    <Box key={image.id}>
                        <Button variant='outlined' onClick={() => onImageClick(image.id)}>
                            <img src={image.webformatURL} alt={image.title} className='image' />
                        </Button>
                    </Box>
                ))
            )}
        </Box>
    );
}

export default ImageList;
