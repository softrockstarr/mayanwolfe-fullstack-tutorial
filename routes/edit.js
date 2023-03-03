const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) //get the edit page with the item ID that we want to edit. 
router.get('/remove/:id', editController.deleteItem) //delete
router.post('/update/:id', editController.updateItem) //we use post here because forms are limited to only get and post requests.


module.exports = router