import { Backdrop, Box, Button, Fade } from "@mui/material"



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


export const Modal = ({ open, setOpen, }) => {
    return (
        <>
            <Box className='category-modal-container' mt={2}>
                <Button onClick={() => setOpen(true)} variant='contained' >Choose Category</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        {/* className='category-btn-container' */}
                        <Box sx={modalStyle} >


                        </Box>
                    </Fade>
                </Modal>
            </Box>
        </>
    )
}
