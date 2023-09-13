const express = require('express');
const router = express.Router();
const Main = require('../views/Main');
const renderTemplate = require('../lib/renderTemplate');

router.get('/', async (req, res) => {
  renderTemplate(Main, {}, res, req);
});

module.exports = router;