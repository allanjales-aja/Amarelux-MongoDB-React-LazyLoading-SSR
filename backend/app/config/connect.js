const mongoose = require('mongoose')

function connect(){
    mongoose
    .connect('mongodb://localhost/amarelux', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Conectado ao mongobd 'amarelux'") // se conectar
    }).catch((error)=>{
        console.log(`Erro na conexão ${error}`) // se não conectar
    })
}

module.exports = connect()