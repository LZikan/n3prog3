const { request } = require('http')
const productService = require('../services/product.service')

exports.getAllProducts = async (request, response) => {
    try {
        const products = await productService.getAllProducts()
        return response.status(200).json({
            status: 200,
            data: products,
            message: 'Produtos listados com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: error
        })
    }
}

exports.getProductById = async (request, response) => {
    try {
        const product = await productService.getProductById()
        return response.status(200).json({
            status: 200,
            data: product,
            message: 'Produto listado com sucesso!'
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: error
        })
    }
}

exports.createProduct = async (request, response) => {
    try {
        const { name, description, unitValue } = request.body
        const product = await productService.createProduct(name, userId)
        return response.status(201).send({
            message: 'Produto criado com sucesso!',
            body: {
                product: product
            }
        })
    } catch (error) {
        response.send(400).json({
            status: 400,
            message: `Erro ao criar Cliente. ERROR: ${error.message}`
        })
    }
}

exports.updateProduct = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { name, description, unitValue } = request.body

        await productService.updateProduct(id, name, description, unitValue)
        response.status(200).send({
            message: 'Produto alterado com sucesso!',
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

exports.deleteProduct = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        
        await productServiceService.deleteProduct(id)
        response.status(200).send({
            message: 'Produto deletado!'
        })

    } catch (error) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}
