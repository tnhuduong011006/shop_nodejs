// Home, search, contact

const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/SiteController')

router.use('/search', userController.search)

// Tuyến đường đầu tiên khi truy xuất vào /+ ...
router.use('/', userController.home)

module.exports = router
