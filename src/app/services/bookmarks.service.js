const { Datastore } = require('@google-cloud/datastore');


const datastore = new Datastore()

async function getAllBookmarks(page = 1) {

    const allWebRefs = await datastore.createQuery('WebReference').run()

    allWebRefs[0].forEach(function (entity) {
        entity.id = entity[datastore.KEY].id;
    });

    return allWebRefs[0];
}

async function saveBookmark(bookmark) {
    const bmKey = datastore.key('WebReference');

    const entity = {
        key: bmKey,
        data: bookmark
    };

    await datastore.save(entity);

    return Promise.resolve({ id: bmKey.id })
}

async function updateBookmark(bookmark) {
    const bmKey = datastore.key(['WebReference']);
    bmKey.id = bookmark.id;
    const entity = {
        key: bmKey,
        data: bookmark
    };

    await datastore.update(entity);

    return await getBookmarkById(bookmark.id);
}

async function getBookmarkById(id) {
    const bmKey = datastore.key(['WebReference'])
    bmKey.id = id
    const entity = await datastore.get(bmKey)

    if (!entity[0]) {
        err = Error(`No Entity with ${id}`)
        err.statusCode = 404;
        throw err;
    }

    return entity[0]
}

async function deleteBookmark(id) {
    bmKey = datastore.key(['WebReference'])
    bmKey.id = id
    await datastore.delete(bmKey)
}



module.exports = {
    getAllBookmarks,
    saveBookmark,
    updateBookmark,
    getBookmarkById,
    deleteBookmark
}