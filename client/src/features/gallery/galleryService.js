import axios from 'axios';

// the API_URL is the URL of the server that we will use to fetch the images
const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

// fetchImages is a function that fetches images from the API
// it takes the page number and category as params
// it returns the response from the API
const fetchImages = async (pageNumber, category) => {
    // we use axios to fetch images from the API
    // we pass the page number and category as params to the API
    const response = await axios.get(API_URL, {
        params: {
            page: pageNumber,
            q: category
        }
    });
    // console.log(response.status, 'response.status');
    // if (response.status !== 200) {
    //     throw new Error('Error fetching images');
    // }
    const fetchedImages = response.data;
    return fetchedImages;

}
// galleryService is an object with the fetchImages function
const galleryService = { fetchImages };
export default galleryService;
