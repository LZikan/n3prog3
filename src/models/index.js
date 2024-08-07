const dbConfig = require('../config/dbconfig')

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        post: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}

db.sequelize = sequelize 
db.users = require('../models/user.model')((db.sequelize))
db.permissions = require('../models/permission.model')((db.sequelize))
db.customer = require('../models/customer.model')((db.sequelize))
db.product = require('../models/product.model')((db.sequelize))
db.order = require('../models/order.model')((db.sequelize))
db.orderItem = require('../models/orderItem.model')((db.sequelize))

db.users.sync()
db.permissions.sync()
db.customer.sync()
db.product.sync()
db.order.sync()
db.orderItem.sync()

module.exports = db