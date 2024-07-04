const express = require('express')
const orderController = require('../controllers/order.controller')
const router = express.Router()

router.get('/', orderController.getAllOrders)
router.get('/:id', orderController.getOrderById)
router.post('/', orderController.createOrder)
router.put('/o:id', orderController.updateOrder)
router.delete('/:id', orderController.deleteOrder)
router.get('/customer/:customerId', orderController.getOrderByCustomerId)
router.get('/pending', orderController.getOrderByCustomerId)

module.exports = router 