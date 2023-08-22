var express = require('express');
var router = express.Router();
var skillsController = require('../controller/skills')

/* GET users listing. */
router.get('/', skillsController.index)
router.get('/:id', skillsController.show)

module.exports = router;
