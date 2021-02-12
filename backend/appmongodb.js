const express = require('express')  /* essencial para rodar o servidor */
const app = express()   /* essencial para rodar o servidor */

const mongoose = require('mongoose')    /* Elegant MongoDB object modeling for Node.js */
app.use(express.json())     /* transmissão de dados entre MongoDB e Node.js */

require('./app/config/connect')     /* conexão db */
require('./app/models/Cliente')     /* modelo de db */
const Cliente = mongoose.model('clientes')      /* criação da collation mongodb */

const bcrypt =  require('bcryptjs')     /* encriptador */


var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', '././app/views')
app.use(bodyParser.urlencoded({extended:true}));

// autoriza a conexão
const cors = require('cors');

app.use(cors());


app.get('/intramarelux', function(req,res){
    res.render('index');
  });

app.get('/clientes',async(req,res)=>{
    const clientesResponse = await Cliente.find()   /* "select * clientes" do MySQL. Produtividade  MÉTODO DO MONGOOSE*/
    const clientesJson = await clientesResponse

    return res.json(clientesJson)
})

app.post('/clientes/email',async(req,res)=>{
    const cliente = await Cliente.find({email:req.body.email}) 

    return res.render('intramarelux',{dados: cliente});
})

app.post('/clientes/cpf',async(req,res)=>{
    const cliente = await Cliente.find({cpf:req.body.cpf}) 

    return res.render('intramarelux',{dados: cliente});
})

app.post ('/cadastrar',async(req,res)=>{
    const invalido = await Cliente.findOne({email: req.body.email})  /* MÉTODO DO MONGOOSE */
    if(invalido){
        return res.json({message:"Este email já possui cadastro. Verifique o email digitado."})
    }else{

    const novoCliente = new Cliente({
        nome_cli: req.body.nomec,
        cpf: req.body.cpf,
        datan: req.body.datan,
        cep: req.body.cep,
        endereco: req.body.enderecoc,
        telefone: req.body.telefone,
        email: req.body.emailc,
        senha: req.body.senhaa,
        oferta: req.body.oferta
    })

    bcrypt.genSalt(10,(error,salt)=>{       /* "salt" gera a hash encriptografada */
        bcrypt.hash(novoCliente.senha, salt, (error,hash)=>{    /* salt gera senha encriptografada */
            if(error){
                res.json({message:"Erro ao cadastrar"})
            }else{
                novoCliente.senha = hash
                novoCliente.save()

                res.json({message:"Cadastro efetuado!", cliente: novoCliente})      
                /* JSON de acordo com models-CLiente.js  Ok no Insomnia */
            }
        })        
    })

    }
})


app.listen(4321)    /* essencial para rodar o servidor */