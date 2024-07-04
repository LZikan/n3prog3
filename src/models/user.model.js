const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const User = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            notNull: true,
            is:/^[a-zA-Z0-9\.]{4,32}$/,
            unique: true
        },
        email:{
            type: DataTypes.STRING,
            notNull: true
        },
        password: {
            type: DataTypes.STRING,
            notNull: true
        }
    },
    {
        timestamps: false
    })
    
//Associação 1 para muitos User -> Permission
    User.associate = (models) => {
        User.hasMany(models.Permission, {
            as: 'permissions',
            foreignKey: 'userId'
        })
        
    }
    return User
}