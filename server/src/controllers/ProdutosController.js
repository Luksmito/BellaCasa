const Produto = require("../database/models/Produtos")



exports.index = async function (req, res) {
    try {
        const idProduto = req.body.id
        const produto = await Produto.findById(idProduto).exec()
        res.send({produto: produto})
        console.log("FUNFOU")
    } catch (error) {
        res.status(400).send("Erro ao encontrar produto" + error)
    }
}

exports.create = async function (req, res) {
    try {
        const {
            nome,
            preco,
            descricao,
            imagem,
            estoque
        } = req.body
        
        const produto = await Produto.create(req.body)
        
        res.status(201).send(produto)
    } catch (error) {
        res.status(400).send("Erro ao cadastrar produto" + error)
    }
}

exports.listaProdutos = async function(req, res){
    try {
        const produtos = await Produto.find().exec()
        res.send(produtos)
    } catch (error) {
        res.send({erro: "Erro requisição" + error})
    }
}

exports.index = async function(req, res){
    try {
        const idProduto = req.headers.id
        const produto = await Produto.findById(idProduto).exec()
        res.send({produto: produto})
    } catch (error) {
        res.status(400).send("Erro ao encontrar produto" + error)
    }
}

exports.deletar = async function(req, res) {
    try {
        const idProduto = req.body.id
        console.log(req.body)
        const produto = await Produto.findByIdAndDelete(idProduto).exec()
        res.send("Produto deletado com sucesso")
    } catch (error) {
        res.status(400).send("Erro ao encontrar produto" + error)
    }
}
        

 /*
class ProdutosController{
    async index(req, res){
        
    }

    async listaProdutos(req, res){
        try {
            const produtos = await Produto.find().exec()
            console.log("itens")
            res.send(produtos)
        } catch (error) {
            res.send({erro: "Erro requisição" + error})
        }
    }

    async create(req, res){
        try {
            const {
                nome,
                preco,
                descricao,
                imagem
            } = req.body
            const produto = await Produto.create(req.body)
            
            res.status(201).send(produto)
        } catch (error) {
            res.status(400).send("Erro ao cadastrar produto" + error)
        }
    }
            
}*/

