const express = require('express');
const router = express.Router();
const poetryController= require('../controller/poetryController');
const methodOverride = require('method-override'); // Utilizado para fazer o delete sem ser pelo fetch

router.use(methodOverride('_method'));

router.get('/',poetryController.render);

router.get('/add', poetryController.showAdd);
router.get('/all',poetryController.allPoetry);
router.get('/edit/:id',poetryController.loadPoetry)

router.post('/add',express.urlencoded({extended:true}),poetryController.addPoetry);
router.post('/edit/:id',express.urlencoded({extended:true}), poetryController.editPoetry)


router.delete('/all/:id',poetryController.deletePoetry);
router.delete(('/all',express.urlencoded({extended:true}) ,poetryController.deletePoetry));

module.exports = router;