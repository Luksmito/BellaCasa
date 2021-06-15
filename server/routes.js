const express =  require('express');
const produtoController = require("./src/controllers/ProdutosController")
const paymentController = require("./src/controllers/PaymentsController")
const routes = express.Router()


//retorna todos os produtos cadastrados
routes.get('/lista-produtos', produtoController.listaProdutos)

//adiciona um produto ao banco de dados
routes.post('/add-produto', produtoController.create)

//Busca produto por id
routes.get('/produto', produtoController.index)

routes.post('/deletar-produto', produtoController.deletar)

routes.get('/payments/checkout/:id/:email/:description/:amount', paymentController.checkout)

routes.get('/payments/succes')

routes.get('/payments/pending')

routes.get('/payments/failure')

module.exports = routes