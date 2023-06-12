import { Dialog, DialogContent, Button } from '@mui/material';

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

const CategoryModal = ({ categories, categoryModalOpen, setCategoryModalOpen, setCategory }) => {
    return (<Dialog open={categoryModalOpen}
        onClose={() => setCategoryModalOpen(false)}
        maxWidth={'lg'}>
        <DialogContent sx={categoryModalStyle}  >
            {categories && categories.map((category, index) => (
                <Button onClick={() => setCategory(category)} variant='contained' key={index}>{category}</Button>
            ))}
        </DialogContent>
    </Dialog>)
}

export default CategoryModal;