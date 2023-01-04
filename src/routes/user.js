const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')

router.use('/signup', userController.signup)

router.use('/signin', userController.signin)

router.use('/profile', userController.profile)

// Tuyến đường đầu tiên khi truy xuất vào /user+ ...
router.use('/', userController.index)

module.exports = router
