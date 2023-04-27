const express = require('express')
const router = express.Router()
const {postUserToBucket} = require('../controllers/bucket')

//Controllers

//Routes
router.route('/').post(postUserToBucket)

module.exports = router