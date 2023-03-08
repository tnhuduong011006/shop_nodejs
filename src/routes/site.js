// Home, search, contact

const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/search', siteController.search)

// Tuyến đường đầu tiên khi truy xuất vào /+ ...
router.get('/', siteController.home)

module.exports = router
