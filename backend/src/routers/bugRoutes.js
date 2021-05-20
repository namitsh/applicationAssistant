const Bug = require('../models').Bug
const bugController = require('../controllers').bugController

const router = require('express').Router()

// create bug
router.post('', bugController.createBug);

router.get('', bugController.listBugs)

router.get('/recent', bugController.listRecentlyCreatedBugs)



module.exports = router