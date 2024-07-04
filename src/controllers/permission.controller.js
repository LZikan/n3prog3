const { request } = require('http')
const permissionService = require('../services/permission.service')

exports.getAllPermissions = async (request, response) => {
    try {
        const permissions = await permissionService.getAllPermissions()
        return response.status(200).json({
            status: 200,
            data: permissions,
            message: 'Permissões listadas com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: error
        })
    }
}

exports.getPermissionById = async (request, response) => {
    try {
        const permission = await permissionService.getPermissionById()
        return response.status(200).json({
            status: 200,
            data: permission,
            message: 'Permissão listada com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: error
        })
    }
}

exports.createPermission = async (request, response) => {
    try {
        const { name, userId } = request.body
        const permission = await permissionService.createPermission(name, userId)
        return response.status(201).send({
            message: 'Permissão criada com sucesso!',
            body: {
                permission: permission
            }
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: `Erro ao criar permissão. ERROR: ${error.message}`
        })
    }
}

exports.updatePermission = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { name, userId } = request.body

        await permissionService.updatePermission(id, name, userId)
        response.status(200).send({
            message: 'Usuário alterado com sucesso!',
            body: {
                name: name,
                userId: userId
            }
        })
    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.deletePermission = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        
        await permissionService.deletePermission(id)
        response.status(200).send({
            message: 'Usuário deletado!'
        })

    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.getPermissionsByUserId = async (request, response) => {
    try {
        const userId = parseInt(request.params.id)

        const permissions = await permissionService.getPermissionsByUserId(userId)
        response.status(200).json({
            status: 200,
            data: permissions,
            message: 'Permissões do usuário encontradas!'
        })
    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}