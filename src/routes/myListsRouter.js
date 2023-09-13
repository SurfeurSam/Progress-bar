const express = require('express');
const router = express.Router();
const MyLists = require('../views/MyLists');
const renderTemplate = require('../lib/renderTemplate');
const { Shablon, User } = require("../../db/models");
const ShowShablon = require("../views/ShowShablon");
const Shablons = require('../views/Shablon');

router.get('/', async (req, res) => {
  try {
    const user = await User.findOne({ where: { name: req.session.user }, raw: true });
    const userId = user.id;
    const MyCoopers = await Shablon.findAll({ where: { userId }, raw: true })
    renderTemplate(MyLists, { MyCoopers }, res, req);
  } catch (error) {
    console.log(error);
  }
});

router.get('/shablon', async (req, res) => {
  renderTemplate(Shablons, {}, res, req);
});

router.post('/shablon', async (req, res) => {
    try {
        const { employee, leader, userId } = req.body;
        const newShablon = await Shablon.create({ employee, leader, userId });
        res.json(newShablon)
    } catch (error){
        console.log(error)
        res.send(error)
    }
})



router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const CoopersShow = await Shablon.findOne({ where: { id } })
    const UserForShowShablon = await User.findOne({ where: { id: CoopersShow.userId} })
    const nameUser = await UserForShowShablon.name
    renderTemplate(ShowShablon, { CoopersShow, nameUser }, res, req)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Shablon.destroy({ where: { id } });
    // res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
  return res.redirect('/mylists');
});



// router.delete('/entry/:id', async (req, res) => {
//   try {
//     await Entry.destroy({ where: { id: req.params.id } });
//   } catch (error) {
//     console.error(error);
//   }
//   return res.redirect('/all-the-entries');
// });

module.exports = router;
