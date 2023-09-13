const express = require('express');
const router = express.Router();
const Login = require('../views/Login');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  renderTemplate(Login, {}, res, req);
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.user = user.name;
        req.session.role = user.role;
        req.session.userId = user.id;
        res.json({
          email: user.email,
          name: user.name,
          // id: user.id,
        });
      } else {
        res.json({ msg: 'Неверный пароль' });
      }
    } else {
      res.json({ msg: 'Такого пользователя нет' });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
module.exports = router;

