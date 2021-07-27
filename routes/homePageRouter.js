const express = require('express');
const router = express.Router();
const homePageController = require('../controller/homePageController');

router.get('/',homePageController.render)
router.get('/search', homePageController.renderSearch)


module.exports = router