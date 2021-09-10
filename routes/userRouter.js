const express = require('express');
const router = express.Router();
const userController= require('../controller/userController');

router.get('/login',userController.showlogin);
router.get('/register',userController.showRegister);

router.post('/login',express.json(),userController.login);
router.post('/register',express.urlencoded({extended:true}),userController.register);

module.exports = router