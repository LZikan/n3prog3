const { request } = require('http')
const userService = require('../services/user.service')

exports.findAll = async (request, response) => {
    try {
        const users = await userService.FindAll()
        return response.status(200).json({
            status: 200,
            data: users, 
            message: 'Usuários listados com sucesso!'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try {
        const user = await userService.findById()
        return response.status(200).json({
            status: 200, 
            data: user,
            message: 'Usuário encontrado com sucesso!'
        })
    } catch (e) {
        response.send(400).json({
            status: 400, 
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const  { username, email, password } = request.body
        const user = await userService.create(username, email, password)
        response.status(201).send({
            message: 'Usuário cadastrado com sucesso!',
            body: {
                user: user
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: `Erro ao cadastrar o usuário. ERROR: ${e.message}`
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { username, email, password } = request.body

        await userService.update(id, username, email, password)
        response.status(200).send({
            message: 'Usuário alterado com sucesso!',
            body: {
                username: username,
                email: email
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        
        await userService.delete(id)
        response.status(200).send({
            message: 'Usuário deletado!'
        })

    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}