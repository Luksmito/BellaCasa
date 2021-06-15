const mongoose = require("../index")


var Schema = mongoose.Schema


const Produtos = new Schema({
    nome: {
        type: String,
        required: true
    },
    index: {
        type: Number,  
        autoIndex: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    precoNumero: {
        type: Number,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    estoque: {
        type: Number,
        required: false
    }
})

const Produto = mongoose.model("produtos", Produtos)

module.exports = Produto