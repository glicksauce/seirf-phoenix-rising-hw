const express = require('express')
const router = express.Router()
const User = require("../models/users.js");
const Product = require("../models/products.js");
// ROUTES



//SEED DATA ROUTE
router.get('/seed', async (req, res) => {
    const newUsers =
      [
        {
            username: 'Jay',
            shopping_cart: []
        }
      ]
  
    try {
      const userData = await User.create(newUsers)
      res.send(userData)
    } catch (err) {
      res.send(err.message)
    }
    res.redirect('/products')
  })

  
// Show
router.get("/checkout/:id", (req, res) => {
    User.findById(req.params.id, (err, showCart) => {
      res.render("showcart.ejs", {
        cart: showCart
      })
    })
  })



module.exports = router;