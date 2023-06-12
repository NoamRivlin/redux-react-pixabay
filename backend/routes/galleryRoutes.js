const express = require('express')
const router = express.Router()

const {
    fetchPhotos,
    fetchPhotoById,
    fetchPhotosByPage
} = require('../controllers/galleryControllers/galleryController')


router.route('/').get(fetchPhotos)
router.route('/id/:id').get(fetchPhotoById)
router.route('/page/:pageNumber').get(fetchPhotosByPage)


module.exports = router
