const User = require('../db/models/user')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'username']
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  })

  module.exports = router

