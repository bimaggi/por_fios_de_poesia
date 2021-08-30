const termOfUseController = require('../controller/termOfUseController');


const express = require('express');
const router = express.Router();

router.get('/',termOfUseController.showTermOfUse)


module.exports = router
