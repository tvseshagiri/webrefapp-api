const bookmarksService = require('../services/bookmarks.service')

async function getAllBookmarks(req, res, next) {
    try {
        res.json(await bookmarksService.getAllBookmarks(req.query.page));
    } catch (err) {
        console.error(`Error while getting bookmarks`, err.message);
        next(err)
    }
}

async function saveBookmark(req, res, next) {

    try {
        const bookmark = {
            title: req.body.title,
            description: req.body.desc,
            keywords: req.body.keywords,
            refUrl: req.body.siteUrl
        }
        res.json(await bookmarksService.saveBookmark(bookmark));
    } catch (err) {
        console.error(`Error while creating bookmarks`, err.message);
        next(err)
    }

}

async function updateBookmark(req, res, next) {

    try {
        const bookmark = {
            id: req.params.id,
            title: req.body.title,
            description: req.body.desc,
            keywords: req.body.keywords,
            refUrl: req.body.siteUrl
        }
        res.json(await bookmarksService.updateBookmark(bookmark));
    } catch (err) {
        console.error(`Error while updating bookmarks`, err.message);
        next(err)
    }

}

async function getBookmarkById(req, res, next) {
    try {
        const id = req.params.id;
        res.json(await bookmarksService.getBookmarkById(id))

    } catch (err) {
        console.error(`Error while getting bookmarks by ID`, err.message);
        next(err)
    }
}

async function deleteBookmark(req, res, next) {
    try {
        const id = req.params.id;
        res.json(await bookmarksService.deleteBookmark(id))

    } catch (err) {
        console.error(`Error while deleting bookmark`, err.message);
        next(err)
    }
}

module.exports = {
    getAllBookmarks,
    saveBookmark,
    updateBookmark,
    getBookmarkById,
    deleteBookmark
}