const express = require('express');
const router = express.Router();
const Registration = require('../views/Registration');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');


router.get('/', (req, res) => {
  renderTemplate(Registration, {}, res, req);
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ msg: 'Такая почта занята!' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hash });
      res.json(newUser.name);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;