const express = require('express')
const userRoute=express.Router()

const userController = require('../controller/Controller')








userRoute.post('/register',userController.registration)
userRoute.post('/login',userController.login)
userRoute.get('/products',userController.products)
userRoute.get('/products/:id',userController.productid)
userRoute.get('/products/category/:category',userController.productByCategory)
userRoute.post('/users/:id/cart',userController.addToCart)
userRoute.get('/users/:id/cart',userController.showCart)
userRoute.post('/users/:id/wishlist',userController.addWishList)
userRoute.get('/users/:id/wishlist',userController.showWishList)


module.exports = userRoute