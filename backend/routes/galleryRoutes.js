const express = require('express')
const router = express.Router()

const {
    fetchPhotos,
    fetchPhotosByCategory,
    fetchPhotoById,
    fetchPhotoByDate,
} = require('../controllers/galleryControllers/galleryController')


router.route('/').get(fetchPhotos)
router.route('/:category').get(fetchPhotosByCategory)
router.route('/:id').get(fetchPhotoById)
router.route('/:date').get(fetchPhotoByDate)

module.exports = router
