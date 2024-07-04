const db = require('../models')
const Permissions = db.permissions
const User = db.users

exports.getAllPermissions = async () => {
    try {
        const permissions = await Permissions.findAll({
            attributes: ['id' , 'name', 'userId']
        })
        return permissions
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar todos os usuários. ERROR: ${error.message}`)
    }
}

exports.getPermissionById = async (id) => {
    try {
        const permission = await Permissions.findByPk(id,{
            attributes: ['id', 'name', 'userId']
        })
        return permission
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar esta permissão. ERROR: ${error.message}`)
    }
}

exports.createPermission = async (name, userId) => {
    try {
        //Variavel para facilitar manutenção
        const permissionData = [name, userId]
        const permission = await Permissions.create({
            name: permissionData.name,
            userId: permissionData.userId
        })
        return permission
    } catch (error) {
        throw Error(`Erro ao criar permissão. ERROR: ${error.message}`)
    }
}

exports.updatePermission = async (id, name, userId) => {
    try {
        const permissionData = [id, name, userId]
        await Permissions.update(
            {
                name: permissionData.name,
                userId: permissionData.userId
            },
            {
                where:{ id: permissionData.id }
            }
    )
    } catch (error) {
        throw Error(`Erro ao editar permissão. ERROR: ${error.message}`)
    }
}

exports.deletePermission = async (id) => {
    try {
        await Permissions.destroy({
            where: {id: id}
        })
    } catch (error) {
        Error(`Erro ao deletar permissão. ERROR: ${error.message}`)
    }
}  

//função para buscar permissões de usuário especifico 
exports.getPermissionsByUserId = async (userId) => {
    try {
        const permission = await Permission.findByPk(userId, {
            include: [{
                model: User,
                as: 'users',
            }]
        })
        return permission
    } catch (error) {
        Error(`Erro ao buscar permissões para este usuário. ERROR: ${error.message}`)
    }
}