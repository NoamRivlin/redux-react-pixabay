const express = require('express')
const router = express.Router()

const {
    fetchPhotos,
    // fetchPhotosByCategory,
    fetchPhotoById,
    fetchPhotosByPage
} = require('../controllers/galleryControllers/galleryController')


router.route('/').get(fetchPhotos)
router.route('/id=:id').get(fetchPhotoById)
router.route('/page_number=:pageNumber').get(fetchPhotosByPage)


module.exports = router
