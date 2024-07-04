const db = require('../models')
const Customer = db.customer

exports.getAllCustomers = async () => {
    try {
        const customers = await Customer.findAll({
            attributes: ['id' , 'fullname', 'email', 'phone']
        })
        return customers
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar todos os clientes. ERROR: ${error.message}`)
    }
}

exports.getCustomerById = async (id) => {
    try {
        const customer = await Customer.findByPk(id,{
            attributes: ['id' , 'fullname', 'email', 'phone']
        })
        return customer
    } catch (error) {
        throw Error(`Ocorreu um erro ao buscar este cliente. ERROR: ${error.message}`)
    }
}

exports.createCustomer = async (fullname, email, phone) => {
    try {
        //Variavel para facilitar manutenção
        const customerData = [fullname, email, phone]
        const customer = await Customer.create({
            name: customerData.fullname,
            description: customerData.email,
            unitValue: customerData.phone
        })
        return customer
    } catch (error) {
        throw Error(`Erro ao criar cliente. ERROR: ${error.message}`)
    }
}

exports.updateCustomer = async (id, fullname, email, phone) => {
    try {
        const customerData = [id, fullname, email, phone]
        await Customer.update(
            {
                name: customerData.fullname,
                description: customerData.email,
                unitValue: customerData.phone
            },
            {
                where:{ id: customerData.id }
            }
    )
    } catch (error) {
        throw Error(`Erro ao editar cliente. ERROR: ${error.message}`)
    }
}

exports.deleteCustomer = async (id) => {
    try {
        await Customer.destroy({
            where: {id: id}
        })
    } catch (error) {
        Error(`Erro ao deletar cliente. ERROR: ${error.message}`)
    }
}  