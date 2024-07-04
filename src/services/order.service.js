const db = require('../models')
const Order = db.order
const OrderItem = db.orderItem
const Customer = db.customer
const Product = db.product

exports.getAllOrders = async () => {
    try {
        const orders = await Order.findAll(
            {
                include: [
                    'customer',
                    'items'
                ]
            },
            {
                attributes: ['id' , 'description', 'orderDate', 'status', 'customerId', 'amount']
            })
        return orders
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar todos os pedidos. ERROR: ${error.message}`)
    }
}

exports.getOrderById = async (id) => {
    try {
        const order = await Order.findByPk(id,{
            attributes: ['id' , 'description', 'orderDate', 'status', 'customerId', 'amount']
        })
        return order
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar este pedido. ERROR: ${error.message}`)
    }
}

exports.createOrder = async (description, orderDate, status, customerId, amount) => {
    try {
        //Variavel para facilitar manutenção
        const orderData = [description, orderDate, status, customerId, amount]
        const order = await Order.create({
            descriprion: orderData.description,
            orderDate: orderData.orderDate,
            status: orderData.status,
            customerId: orderData.customerId,
            amount: orderData.amount
        },
        {
            iclude: [{
                model: OrderItem,
                as: 'items'
            }]
        })
        return order
    } catch (error) {
        throw Error(`Erro ao criar pedido. ERROR: ${error.message}`)
    }
}

exports.updateOrder = async (description, orderDate, status, customerId, amount) => {
    try {
        const orderData = [description, orderDate, status, customerId, amount]
        await Order.update(
            {
                descriprion: orderData.description,
                orderDate: orderData.orderDate,
                status: orderData.status,
                customerId: orderData.customerId,
                amount: orderData.amount
            },
            {
                where:{ id: orderData.id }
            }
    )
    } catch (error) {
        throw Error(`Erro ao editar pedido. ERROR: ${error.message}`)
    }
}

exports.deleteOrder = async (id) => {
    try {
        await Order.destroy({
            where: {id: id}
        })
    } catch (error) {
        Error(`Erro ao deletar pedido. ERROR: ${error.message}`)
    }
}  

//Buscar todos os pedidos de um dado cliente
exports.getOrdersByCustomerId = async (customerId) => {
    try {
        const orders = await Order.FindAll({
            where: { 
                customerId: customerId
            },
            include:['customer', 'items']
        })
        return orders
    } catch (error) {
        Error(`Erro ao encontrar pedido. ERROR: ${error.message}`)
    }
}

//Buscar todos pedidos em aberto
exports.getPendingOrders = async () => {
    try {
        const orders = Order.findAll({
            where: {
                status: 'PENDING'
            },
            include: [ 'customer', 'items']
        })
        return orders
    } catch (error) {
        Error(`Erro ao encontrar pedidos em aberto. ERROR: ${error.message}`)
    }
}