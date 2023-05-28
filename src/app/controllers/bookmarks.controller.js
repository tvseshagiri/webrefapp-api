const bookmarksService = require('../services/bookmarks.service')

async function getAllBookmarks(req,res,next) {
    try {
        res.json(await bookmarksService.getAllBookmarks(req.query.page));
    } catch(err) {
        console.error(`Error while getting bookmarks`,err.message);
        next(err)
    }
}

module.exports = {
    getAllBookmarks
}