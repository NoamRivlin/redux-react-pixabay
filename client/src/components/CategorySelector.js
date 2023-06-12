import { Button } from '@mui/material';

const categories = ['Nature', 'Backgrounds', 'Fashion', 'Science', 'Education', 'Feelings', 'Health', 'People', 'Religion', 'Places', 'Animals', 'Industry', 'Computer', 'Food', 'Sports', 'Transportation', 'Travel', 'Buildings', 'Business']


function CategorySelector({ selectedCategory, onSelect }) {
    return (
        <div>
            <Button onClick={() => onSelect(null)} variant='contained'>All</Button>
            {categories.map((category) => (
                <Button
                    key={category}
                    onClick={() => onSelect(category)}
                    variant={selectedCategory === category ? 'contained' : 'outlined'}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}

export default CategorySelector;
