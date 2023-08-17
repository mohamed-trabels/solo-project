const menuModel = require('../models/menuModel')

exports.getPizzaItems = (req, res) => {
  menuModel.getItemsByCategory('Pizza')
    .then(pizzaItems => res.json(pizzaItems))
    .catch(error => {
      console.log('An error occurred:', error)
      res.status(500).json({ error: 'An error occurred' })
    })
}

exports.getSandwichItems = (req, res) => {
  menuModel.getItemsByCategory('Sandwich')
    .then(sandwichItems => res.json(sandwichItems))
    .catch(error => {
      console.log('An error occurred:', error)
      res.status(500).json({ error: 'An error occurred' })
    })
}

exports.getBarbecueItems = (req, res) => {
  menuModel.getItemsByCategory('Barbecue')
    .then(barbecueItems => res.json(barbecueItems))
    .catch(error => {
      console.log('An error occurred:', error)
      res.status(500).json({ error: 'An error occurred' })
    })
}

exports.getSeafoodItems = (req, res) => {
  menuModel.getItemsByCategory('Seafood')
    .then(seafoodItems => res.json(seafoodItems))
    .catch(error => {
      console.log('An error occurred:', error)
      res.status(500).json({ error: 'An error occurred' })
    })
}
