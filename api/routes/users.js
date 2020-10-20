const router = require('express').Router();
const { User } = require('../db');

router.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
  console.log(req.body)
  const { firstName, lastName, email } = req.body
  if(!firstName || !lastName || !email) {
    res.status(400).send({text: 'Invalid data'})
  }

  User.create({
    firstName,
    lastName,
    email
  })
    .then(createdUser => {
      res.status(200).send({
        text: 'User created successfully!',
        user: createdUser.dataValues
      })
    })
})

module.exports = router
