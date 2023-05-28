const { Datastore } = require('@google-cloud/datastore');


const datastore = new Datastore()

async function getAllBookmarks(page = 1) {

    const allWebRefs = await datastore.createQuery('WebReference').run()

    console.log('I wrote it')

    return allWebRefs;
}


module.exports = {
    getAllBookmarks
}