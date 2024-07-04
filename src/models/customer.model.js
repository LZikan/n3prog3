const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        fullname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    },
    {
        timestamps: false
    })
    return Customer
}