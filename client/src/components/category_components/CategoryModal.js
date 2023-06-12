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

const categories = ['Nature', 'Backgrounds', 'Fashion', 'Science', 'Education', 'Feelings', 'Health', 'People', 'Religion', 'Places', 'Animals', 'Industry', 'Computer', 'Food', 'Sports', 'Transportation', 'Travel', 'Buildings', 'Business']

const CategoryModal = ({ categoryModalOpen, setCategoryModalOpen, handleCategoryChange }) => {
    // props are passed from Category.js
    // we use the props to pass the state and event handlers to the components that need them
    return (<Dialog
        // open when the categoryModalOpen state is true
        open={categoryModalOpen}
        // when the modal is closed set the categoryModalOpen state to false
        onClose={() => setCategoryModalOpen(false)}
        // set the max width of the modal to large
        maxWidth={'lg'}>
        <DialogContent sx={categoryModalStyle}  >
            {
                // map through the categories array and display a button for each category
                // when a button is clicked call the handleCategoryChange function and pass the category as an argument
                // the handleCategoryChange function is passed from Category.js
                categories && categories.map((category) => (
                    <Button onClick={() => handleCategoryChange(category)} variant='contained' key={category}>{category}</Button>
                ))}
        </DialogContent>
    </Dialog>)
}

export default CategoryModal;