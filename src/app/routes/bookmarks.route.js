const express = require('express')
const router = express.Router()

const bookmarksController = require('../controllers/bookmarks.controller')
//TODO: Define routers for bookmarks

router.get('/',bookmarksController.getAllBookmarks)

module.exports = router;