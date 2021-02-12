const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cliente = new Schema({   /* criação de collection no MogoDB */
    nome_cli: {
        type: String,
        required: true  /* campo obrigatório */
    },
    cpf: {
        type: Number,
        required: true
    },
    datan: {
        type: Date,
        required: true
    },
    cep: {
        type: Number,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    oferta: {
        type: Boolean,
        required: true
    },
})

mongoose.model('clientes', Cliente)   /* a tabela 'clientes' será criada */