const axios = require('axios');

const API_KEY = process.env.API_KEY;
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;
const ITEMS_PER_PAGE = 9;

const fetchPhotos = async (req, res) => {
    try {
        let { page, q } = req.query;
        if (!q) {
            q = ''
        }
        const { data } = await axios.get(API_URL, {
            params: {
                page,
                per_page: ITEMS_PER_PAGE,
                q,
            }
        });
        const imageObjects = data.hits
        res.status(200).json(imageObjects);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}

const fetchPhotosByCategory = async (req, res, category) => {
    try {
        const { page } = req.query;
        // const { data } = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${sport}`);
        const { data } = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: API_KEY,
                page,
                per_page: ITEMS_PER_PAGE,
                category
            }
        });
        // log the full path of the request
        console.log('req.query', req.query, 'req.params', req.params, 'req.body', req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}


const fetchPhotoById = async (req, res) => { }


const fetchPhotoByDate = async (req, res) => { }


module.exports = { fetchPhotos, fetchPhotosByCategory, fetchPhotoById, fetchPhotoByDate }