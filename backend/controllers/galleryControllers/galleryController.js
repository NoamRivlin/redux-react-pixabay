const axios = require('axios');

// we need to get the API_KEY from the .env file which is in the root directory and is not included in the repository
// because it contains sensitive information
const API_KEY = process.env.API_KEY;
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;
const ITEMS_PER_PAGE = 9;

const fetchPhotos = async (req, res) => {
    try {
        // we destructure the page and q query parameters from the request object
        const { page, q } = req.query;
        // we make an axios request to the pixabay API with the page and q query parameters 
        const { data } = await axios.get(`${API_URL}&page=${page}&per_page=${ITEMS_PER_PAGE}&q=${q}`)
        // imageObjects is an array of image objects
        const imageObjects = data.hits
        // we set the status code to 200 to indicate that the request was successful
        // we send the imageObjects array to the client
        res.status(200).json(imageObjects);

    } catch (error) {
        console.log(error.message);
        // we set the status code to 500 to indicate that there was a server error
        // we send a message to the client
        res.status(500).json({ message: 'Server Error' });
    }
}



const fetchPhotoById = async (req, res) => {
    try {
        // we destructure the id parameter from the request object
        const { id } = req.params;
        // we make an axios request to the pixabay API with the id parameter
        const { data } = await axios.get(`${API_URL}&id=${id}`)
        // we set the status code to 200 to indicate that the request was successful
        // we send the image object to the client
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        // we set the status code to 500 to indicate that there was a server error
        // we send a message to the client
        res.status(500).json({ message: 'Server Error' });
    }
}

const fetchPhotosByPage = async (req, res) => {
    try {
        // we destructure the pageNumber parameter from the request object
        const { pageNumber } = req.params;
        // we make an axios request to the pixabay API with the pageNumber parameter
        const { data } = await axios.get(`${API_URL}&page=${pageNumber}&per_page=${ITEMS_PER_PAGE}`)
        // we set the status code to 200 to indicate that the request was successful
        // we send the image objects to the client
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        // we set the status code to 500 to indicate that there was a server error
        res.status(500).json({ message: 'Server Error' });
    }
}


module.exports = { fetchPhotos, fetchPhotoById, fetchPhotosByPage }