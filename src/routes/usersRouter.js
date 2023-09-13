const express = require('express');
const router = express.Router();
const Users = require('../views/Users');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const isAuth = require('../middlewares/isAuth');

router.get('/',isAuth, async (req, res) => {
  try {
    const userList = await User.findAll({
      attributes: ['name', 'role'],
      raw: true,
    });

    renderTemplate(Users, { userList }, res, req);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put('/', async (req, res) => {
  try {
    const { name, role } = req.body;
    await User.update({ role }, { where: { name } });

    const updatedUser = await User.findOne({
      where: { name },
      attributes: ['name', 'role'],
      raw: true,
    });

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ where: { name }, raw: true });

    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete('/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const user = await User.findOne({ where: { name } });
    if (!user) {
      return res.status(404).send('User not found');
    }
    await user.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.put('/:userName/reset-password', async (req, res) => {
  try {
    const { userName } = req.params;
    const { password } = req.body;

    const user = await User.findOne({ where: { name: userName } });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await user.update({ password: hashedPassword });

    res.json({
      name: user.name,
      password: password,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});



module.exports = router;
