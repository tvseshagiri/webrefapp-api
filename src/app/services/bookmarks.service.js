const { Datastore } = require('@google-cloud/datastore');


const datastore = new Datastore()

async function getAllBookmarks(page = 1) {

    const allWebRefs = await datastore.createQuery('WebReference').run()

    allWebRefs[0].forEach(function (entity) {
        console.log(entity[datastore.KEY].id);
        entity.id = entity[datastore.KEY].id;
    });

    console.log('I wrote it')

    return allWebRefs[0];
}

async function saveBookmark(bookmark) {
    const bmKey = bookmark.id ? datastore.key(['WebReference', bookmark.id]) : datastore.key('WebReference');

    const entity = {
        key: bmKey,
        data: bookmark
    };

    await datastore.upsert(entity);
}

async function getBookmarkById(id) {
    const bmKey = datastore.key(['WebReference'])
    bmKey.id = id
    const entity = datastore.get(bmKey)

    if (!entity[0]) {
        err = Error(`No Entity with ${id}`)
        err.statusCode = 404;
        throw err;
    }

    return entity[0]
}

async function deleteBookmark(id) {
    console.log("Delete ID", id)
    const bmKey = datastore.key(['WebReference'])
    bmKey.id = id
    await datastore.delete(bmKey)
}



module.exports = {
    getAllBookmarks,
    saveBookmark,
    getBookmarkById,
    deleteBookmark
}