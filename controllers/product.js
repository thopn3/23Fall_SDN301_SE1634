import {productRepository} from '../repositories/index.js'

async function getAllProducts(req, res){
    res.status(200).json({
        message: 'List of products'
    })
}

async function createProduct(req, res){
    try {
        const {name,price,quantity} = req.body
        const result = await productRepository.createProduct({name,price,quantity})
        if(!result)
            res.status(500).json({
                message: 'Create product false'
            })
        else
            res.status(200).json({
                message: 'List of products',
                data: result
            })
    } catch (error) {
        res.status(500).json({
            erros: error.toString()
        })
    }
}

export default {
    getAllProducts,
    createProduct
}