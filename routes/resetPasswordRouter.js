const express = require('express');
const router = express.Router();
const resetPassword = require('../controller/resetPasswordController');


router.get('/forgot',resetPassword.showForgotPassword)
router.post('/forgot',express.urlencoded({extended:true}),resetPassword.forgotPassword);

router.get('/',resetPassword.showResetPassword)
router.post('/',express.urlencoded({extended:true}),resetPassword.resetPassword)


module.exports = router