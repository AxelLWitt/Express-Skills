var express = require('express');
var router = express.Router();
var skillsController = require('../controller/skills')

/* GET users listing. */
router.get('/', skillsController.index)
router.get('/new', skillsController.new)
router.get('/:id', skillsController.show)
router.post('/', skillsController.create)

module.exports = router;