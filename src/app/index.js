const express = require('express')
const app = express()
const bookmarksRoute = require('./routes/bookmarks.route')

const bodyParser = require('body-parser')

//setup middleware modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

// setup default get handler

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

// Error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});


//setup app specific routers

app.use('/api/bookmarks', bookmarksRoute)

module.exports = app