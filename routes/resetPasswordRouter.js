const resetPassword = require('../controller/resetPasswordController');

const express = require('express');
const router = express.Router();


router.get('/forgot',resetPassword.showForgotPassword)
router.post('/',express.urlencoded({extended:true}),resetPassword.forgotPassword);
router.put('/',express.json(),resetPassword.resetPassword)


module.exports = router