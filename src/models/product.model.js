const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        unitValue: DataTypes.FLOAT
    },
    {
        timestamps: false
    })

    return Product
}