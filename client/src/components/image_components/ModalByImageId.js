import { Dialog, DialogContent } from '@mui/material';
import "./style.css";


const imageModalStyle = {
    bgcolor: '#0987A0 ',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    p: 5,
    gap: '10px',
    justifyContent: 'space-between',
    color: '#BEE3F8',
    fontWeight: 'bold',
}

const ModalByImageId = ({ images, imageModalId, imageModalOpen, setImageModalOpen }) => {
    // find the image that matches the image id passed to the modal
    const image = images.find((image) => image.id === imageModalId);
    // if the image is found display the image modal

    return (
        // if the image is found display the image modal
        image &&
        <Dialog
            // the modal is open when the image modal open state is true
            open={imageModalOpen}
            // when the modal is closed set the image modal open state to false
            // so the modal is no longer displayed
            onClose={() => setImageModalOpen(false)}
            maxWidth={'lg'} >
            <DialogContent sx={imageModalStyle}
            >
                <img src={image.webformatURL} alt={image.title} className='image' />
                <p >
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
    )


}
export default ModalByImageId;