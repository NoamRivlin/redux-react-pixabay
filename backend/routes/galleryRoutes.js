const express = require('express')
// express.Router() is a class to create route handlers
// we create a new router object by calling the express.Router() class
const router = express.Router()

// we destructure the fetchPhotos, fetchPhotoById and fetchPhotosByPage functions from the galleryController.js file
const {
    fetchPhotos,
    fetchPhotoById,
    fetchPhotosByPage
} = require('../controllers/galleryControllers/galleryController')

// this route is for fetching images from the pixabay API with the page and q query parameters
// the route is GET /api/gallery
// the route is public
router.route('/').get(fetchPhotos)
// this route is for fetching an image from the pixabay API with the id parameter
// the route is GET /api/gallery/id/:id
// the route is public
router.route('/id/:id').get(fetchPhotoById)
// this route is for fetching images from the pixabay API with the pageNumber parameter
// the route is GET /api/gallery/page/:pageNumber
// the route is public
router.route('/page/:pageNumber').get(fetchPhotosByPage)


module.exports = router
