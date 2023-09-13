const express = require('express');
const router = express.Router();
const EditList = require('../views/EditList');
const renderTemplate = require('../lib/renderTemplate');
const { Shablon } = require("../../db/models");

router.get('/show.shablon/:id', async (req, res) => {
  try {
    const { id } = req.params
    const CoopersShow = await Shablon.findOne({ where: { id } })
    // const LiderForShowShablon = await User.findOne({ where: { id: CoopersShow.userId} })
    // const nameUser = await UserForShowShablon.name
    renderTemplate(EditList, { CoopersShow }, res, req)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

router.put('/edit.shablon/:id', async (req, res) => {
  try {
    // console.log(req.body);
    const shablonEdit = await Shablon.findOne({ where: { id: req.params.id } });
    const { name, value } = req.body;
    console.log("🚀🚀🚀🚀🚀 ~ req.body:", req.body)
    shablonEdit[name] = value;
    console.log("🚀🚀🚀🚀🚀 ~ shablonEdit:", shablonEdit)
    shablonEdit.save();
    res.sendStatus(200)
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;