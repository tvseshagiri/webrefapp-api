const express = require('express')
const router = express.Router()

const bookmarksController = require('../controllers/bookmarks.controller')
//TODO: Define routers for bookmarks

router.get('/', bookmarksController.getAllBookmarks)
router.get('/:id', bookmarksController.getBookmarkById)
router.delete('/:id', bookmarksController.deleteBookmark)
router.put('/:id', bookmarksController.deleteBookmark)
router.post('/', bookmarksController.saveBookmark)

module.exports = router;