import { Backdrop, Box, Button, Fade } from "@mui/material"



export const Modal = ({ open, }) => {
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
                        <Box sx={style} >
                            {/* <Button onClick={() => setCategory('sport')} variant='contained' >Sport</Button>
                  <Button onClick={() => setCategory('nature')} variant='contained' >Nature</Button>
                  <Button onClick={() => setCategory('animals')} variant='contained' >Animals</Button>
                  <Button onClick={() => setCategory('work')} variant='contained' >Work</Button> */}
                        </Box>
                    </Fade>
                </Modal>
            </Box>
        </>
    )
}
