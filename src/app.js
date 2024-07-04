const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routers/index')
const userRouters = require('./routers/user.routers')
const permissionRouters = require('./routers/permission.routers')
const productRouters = require('./routers/product.routers')
const customerRouters = require('./routers/customer.routers')
const orderRouters = require('./routers/order.routers')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/users', userRouters)
app.use('/permissions', permissionRouters)
app.use('/products', productRouters)
app.use('/customers', customerRouters)
app.use('/orders', orderRouters)

module.exports = app