const db = require('../models')
const Users = db.users

exports.FindAll = async () => {
    try {
        const users = await Users.FindAll({
            attributes:['id','username','email']
        })
        return users
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar os usuários. ERROR: ' ${e.message}`)
    }
}

exports.findById = async(id) => {
    try {
        const user = await Users.findByPk(id,{
            attributes:['id','username','email']
        })
    } catch (e) {
        throw Error(`Ocorreu um erro ao selecionar o usuário. ERROR: ${e.message}`)
    }
}

exports.create = async(username, email, password) => {
    try {
        const user = await Users.create({
            username: username,
            email: email,
            password: password
        })
        return user
    } catch (e) {
        throw Error(`Erro ao criar usuário: ${username}. ERROR: ${e.message} `)
    }
}

exports.update = async(id, username, email, password) => {
    try {
        await Users.update(
            {
                username: username,
                email: email,
                password: password
            },
            {
                where:{id: id}
            }
        )
    } catch (e) {
        throw Error(`Erro ao editar usuário. ERROR: ${e.message} `)
    }
}

exports.delete = async (id) => {
    try {
        await Users.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error(`Erro ao deletar usuário. ERROR: ${e.message} `)
    }
}