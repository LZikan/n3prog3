const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        description: DataTypes.STRING,
        orderDate: DataTypes.STRING,
        status: DataTypes.STRING,
        customerId:{
            type: DataTypes.INTEGER,
            references: {
                model: 'Customers',
                key: 'id'
            }
        },
        amount: DataTypes.FLOAT
    },
    {
        timestamps: false
    })
    //Assoicação com as tabelas Customer e OrderItem
    Order.Associate = (models) => {
        Order.belongsTo(models.Customer, {
            as: 'customer', 
            foreignKey: 'customerId'
        })
        Order.hasMany(models.OrderItem, {
            as: 'items',
            foreignKey: 'orderId'
        })
    }

    return Order
}