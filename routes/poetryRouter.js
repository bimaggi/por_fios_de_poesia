const express = require('express');
const router = express.Router();
const poetryController= require('../controller/poetryController');
const methodOverride = require('method-override'); // Utilizado para fazer o delete sem ser pelo fetch

router.use(methodOverride('_method'));


router.get('/addPoetry',poetryController.showAdd);
router.get('/allPoetry',poetryController.allPoetry);
router.get('/editPoetry/:id',poetryController.loadPoetry)

router.post('/addPoetry',express.urlencoded({extended:true}),poetryController.addPoetry);
router.post('/editPoetry/:id',express.urlencoded({extended:true}), poetryController.editPoetry)

router.delete('/allPoetry/:id',poetryController.deletePoetry);
router.delete(('/allPoetry',express.urlencoded({extended:true}) ,poetryController.deletePoetry));

module.exports = router
