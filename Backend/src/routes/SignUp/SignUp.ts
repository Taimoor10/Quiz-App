const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const {UserModel} = require('../../database/db');

router.post('/signup', (req: any, res: any) => {
  const { body } = req;
  const { email, password, firstName, lastName, street, telephoneNumber } = body;

  console.log(email, password, firstName, lastName, street, telephoneNumber);

  const newUser = new UserModel({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    street: street,
    telephoneNumber: telephoneNumber
  });

  newUser.save().then((user: any) => {
    console.log('User Created:', user);
    res.sendStatus(201);
  })
  .catch(() => {
    res.send("Error while creating user");
  });
})

module.exports = router;