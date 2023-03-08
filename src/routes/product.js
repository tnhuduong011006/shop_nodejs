const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductController')

router.get('/create', productController.create)
router.get('/:id/edit', productController.edit)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.delete)
router.get('/update', productController.update)
router.get('/filter/:id', productController.showType)
router.get('/filter', productController.filter)
router.post('/store', productController.store)
router.get('/:slug', productController.show)

module.exports = router
