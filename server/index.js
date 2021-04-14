//path is a Node.js native utility module
//require is Node.js global function that allows you to extract contents from module.exports object inside some file.
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

//request static middleware for bundle.js
app.use(express.static(path.join(__dirname, '..', 'public')))

//loggig middleware, for dev use only
app.use(morgan('dev'))

//body parsing middleware for json
app.use(express.json())
//for body, extended: true precises that the req.body object will contain values of any type instead of just strings
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./api'))
app.use('/auth', require('./auth'))

app.use((req, res, next) => {
    //returns the extension of the path, from the last occurrence of the .(period) character to end of string in the last portion of the path
    //file extension .js, .html
    if(path.extname(req.path).length){
        const err = new Error('Not found');
        err.status = 404;
        next(err);
    } else {
        next();
    }
})

//error catching middleware
app.use((err, req, res, next) =>{
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})
//give more information about valid frontened routes vs routes that are inbvalid => '*'
app.get('*', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));


module.exports = app

