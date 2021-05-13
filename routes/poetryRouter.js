const express = require('express');
const router = express.Router();
const poetryController= require('../controller/poetryController')

router.get('/',poetryController.render);

module.exports = router;