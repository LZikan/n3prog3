const db = require('../models')
const Product = db.product

exports.getAllProducts = async () => {
    try {
        const products = await Product.findAll({
            attributes: ['id' , 'name', 'description', 'unitValue']
        })
        return products
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar todos os produtos. ERROR: ${error.message}`)
    }
}

exports.getProductById = async (id) => {
    try {
        const product = await Product.findByPk(id,{
            attributes: ['id' , 'name', 'description', 'unitValue']
        })
        return product
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar este produto. ERROR: ${error.message}`)
    }
}

exports.createProduct = async (name, description, unitValue) => {
    try {
        //Variavel para facilitar manutenção
        const productData = [name, description, unitValue]
        const product = await Product.create({
            name: productData.name,
            description: productData.description,
            unitValue: productData.unitValue
        })
        return product
    } catch (error) {
        throw Error(`Erro ao criar produto. ERROR: ${error.message}`)
    }
}

exports.updateProduct = async (id, name, description, unitValue) => {
    try {
        const productData = [id, name, description, unitValue]
        await Product.update(
            {
                name: productData.name,
                description: productData.description,
                unitValue: productData.unitValue
            },
            {
                where:{ id: productData.id }
            }
    )
    } catch (error) {
        throw Error(`Erro ao editar produto. ERROR: ${error.message}`)
    }
}

exports.deleteProduct = async (id) => {
    try {
        await Product.destroy({
            where: {id: id}
        })
    } catch (error) {
        Error(`Erro ao deletar produto. ERROR: ${error.message}`)
    }
}  