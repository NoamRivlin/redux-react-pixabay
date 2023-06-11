const axios = require('axios');

const API_KEY = process.env.API_KEY;
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;
const ITEMS_PER_PAGE = 9;

const fetchPhotos = async (req, res) => {
    try {
        const { page, q } = req.query;
        const { data } = await axios.get(`${API_URL}&page=${page}&per_page=${ITEMS_PER_PAGE}&q=${q}`)
        const imageObjects = data.hits
        res.status(200).json(imageObjects);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}



const fetchPhotoById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${API_URL}&id=${id}`)
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

const fetchPhotosByPage = async (req, res) => {
    try {
        const { pageNumber } = req.params;
        const { data } = await axios.get(`${API_URL}&page=${pageNumber}&per_page=${ITEMS_PER_PAGE}`)
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}


module.exports = { fetchPhotos, fetchPhotoById, fetchPhotosByPage }