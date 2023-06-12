import { Dialog, DialogContent } from '@mui/material';
const imageModalStyle = {
    bgcolor: '#0987A0 ',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    p: 5,
    gap: '10px',
    justifyContent: 'space-between',
    color: 'lightblue',
    fontWeight: 'bold',
}

const ModalByImageId = ({ images, modalId, imageModalOpen, setImageModalOpen }) => {
    const image = images.find((image) => image.id === modalId);
    if (image) {
        return (
            <Dialog open={imageModalOpen} onClose={() =>
                setImageModalOpen(false)
            } maxWidth={'lg'} >
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

}
export default ModalByImageId;