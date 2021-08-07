const express = require('express');
const router = express.Router();
const poetryController= require('../controller/poetryController');
const methodOverride = require('method-override'); // Utilizado para fazer o delete sem ser pelo fetch
const isAdmin = require('../controller/isAdmin')

router.use(methodOverride('_method'));

router.get('/addPoetry',poetryController.showAdd);
router.get('/allPoetry',isAdmin,poetryController.allPoetry);
router.get('/editPoetry/:id',isAdmin,poetryController.loadPoetry)

router.post('/addPoetry',express.urlencoded({extended:true}),poetryController.addPoetry,isAdmin);
router.post('/editPoetry/:id',express.urlencoded({extended:true}),isAdmin, poetryController.editPoetry)

router.delete('/allPoetry/:id',isAdmin,poetryController.deletePoetry);
router.delete(('/allPoetry',express.urlencoded({extended:true}),isAdmin,poetryController.deletePoetry));

module.exports = router
