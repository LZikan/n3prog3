const { request } = require('http')
const customerService = require('../services/customer.service')

exports.getAllCustomers = async (request, response) => {
    try {
        const customers = await customerService.getAllCustomers()
        return response.status(200).json({
            status: 200,
            data: customers,
            message: 'Clientes listados com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: error
        })
    }
}

exports.getCustomerById = async (request, response) => {
    try {
        const customer = await customerService.getCustomerById()
        return response.status(200).json({
            status: 200,
            data: customer,
            message: 'Cliente listado com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: error
        })
    }
}

exports.createCustomer = async (request, response) => {
    try {
        const { name, description, unitValue } = request.body
        const customer = await customerService.createCustomer(name, userId)
        return response.status(201).send({
            message: 'Cliente criado com sucesso!',
            body: {
                customer: customer
            }
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: `Erro ao criar Cliente. ERROR: ${error.message}`
        })
    }
}

exports.updateCustomer = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { name, description, unitValue } = request.body

        await customerService.updateCustomer(id, name, description, unitValue)
        response.status(200).send({
            message: 'Cliente alterado com sucesso!',
            body: {
                name: name,
                description: description,
                unitValue: unitValue
            }
        })
    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.deleteCustomer = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        
        await customerServiceService.deleteCustomer(id)
        response.status(200).send({
            message: 'Cliente deletado!'
        })

    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}
