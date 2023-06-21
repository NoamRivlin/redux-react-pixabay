import './App.css';
import { Box, } from '@mui/material';
import ImageList from './components/image_components/ImageList';
import Pagination from './components/pagination/Pagination';
import Category from './components/category_components/Category';




function App() {

  return (
    < >
      <Box className='container'>
        <Category />
        <ImageList />
        <Pagination />
      </Box >
    </>
  );

}


export default App;
