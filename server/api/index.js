//Router class creates modular, mountable route handlers
//break up your different routes using the router object
const router = require('express').Router()

router.use('/users', require('./users'))

router.use((res, req, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

module.exports = router