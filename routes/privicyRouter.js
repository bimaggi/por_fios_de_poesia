const privicyController = require('../controller/privicyController');


const express = require('express');
const router = express.Router();

router.get('/',privicyController.showPrivicyPolicy)


module.exports = router
