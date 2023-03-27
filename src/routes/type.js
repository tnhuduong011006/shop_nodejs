const express = require('express')
const router = express.Router()

const typeController = require('../app/controllers/TypeController')

router.get('/create', typeController.create)
router.get('/update', typeController.update)
router.get('/:id/edit', typeController.edit)
router.put('/:id', typeController.updateType)
router.post('/store', typeController.store)
router.delete("/:id", typeController.delete)

module.exports = router
