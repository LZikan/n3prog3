const { request } = require('http')
const orderService = require('../services/order.service')

exports.getAllOrders = async (request, response) => {
    try {
        const orders = await orderService.getAllOrders()
        return response.status(200).json({
            status: 200,
            data: orders, 
            message: 'Pedidos listados com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: error
        })
    }
}

exports.getOrderById = async (request, response) => {
    try {
        const order = await orderService.getOrderById()
        return response.status(200).json({
            status: 200, 
            data: order,
            message: 'Pedido encontrado com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400, 
            message: error
        })
    }
}

exports.createOrder = async (request, response) => {
    try {
        const  { description, orderDate, status, customerId, amount } = request.body
        const order = await orderService.createOrder(description, orderDate, status, customerId, amount)
        response.status(201).send({
            message: 'Pedido cadastrado com sucesso!',
            body: {
                order: order
            }
        })
    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: `Erro ao cadastrar o Pedido. ERROR: ${error.message}`
        })
    }
}

exports.updateOrder = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { description, orderDate, status, customerId, amount } = request.body

        await orderService.updateOrder(id, description, orderDate, status, customerId, amount)
        response.status(200).send({
            message: 'Pedido alterado com sucesso!',
            body: {
                description: description,
                orderDate: orderDate,
                status: status,
                customerId: customerId,
                amount: amount
            }
        })
    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.deleteOrder = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        
        await orderService.deleteOrder(id)
        response.status(200).send({
            message: 'Pedido deletado!'
        })

    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.getOrderByCustomerId = async(request, response) => {
    try {
        const id = parseInt(request.params.id)

        const orders = await orderService.getOrdersByCustomerId(id)
        response.status(200).json({
            message: 'Pedidos encontrados com sucesso',
            body: {
                orders: orders
            }
        })
    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.getPendingOrders = async(request, response) => {
    try {
        const orders = await orderService.getPendingOrders()
        response.status(200).json({
            message: 'Pedidos em aberto encontrados com sucesso',
            body: {
                orders: orders
            }
        })
    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: error.message
        })
    }
}