const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Permissions = sequelize.define('Permission', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: DataTypes.STRING,
        //Foreign Key implementada
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id' 
            }
        },
    },
    {
        timestamps: false
    })

    //Associação com user.model.js
    Permissions.associate = (models) => {
        Permission.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId' 
        })
    }

    return Permissions
}