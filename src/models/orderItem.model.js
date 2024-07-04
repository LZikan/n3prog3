const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const OrderItem = sequelize.define('OrderItem',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Orders',
                key: 'id'
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
                key: 'id'
            }
        },
        quantity: DataTypes.INTEGER,
        valueItem: DataTypes.FLOAT
    },
    {
        timestamps: false
    })

    //Associação com  a tabela Order e Product para evitar uma relação muitos para muitos
    OrderItem.associate = (models) => {
        OrderItem.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'orderId'
        })
        OrderItem.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productId'
        })
    }
    return OrderItem
}