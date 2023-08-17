const express = require('express')
const router = express.Router()
const menuController = require('../controllers/menuController')

router.get('/pizza', menuController.getPizzaItems)
router.get('/sandwich', menuController.getSandwichItems)
router.get('/barbecue', menuController.getBarbecueItems)
router.get('/seafood', menuController.getSeafoodItems)


module.exports = router
