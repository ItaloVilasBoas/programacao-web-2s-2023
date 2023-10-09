const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8081;

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('index.html');
})

app.post('/dados', (req, res)=>{
    var camposNaoPreenchidos = new Array();
    var dadosPessoais = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dataNascimento: req.body.data_nascimento,
        cep: req.body.cep,
        uf: req.body.uf,
        endereco: req.body.endereco,
        email: req.body.email,
        telefone: req.body.telefone
    }
    var dadosConsulta = {
        especialidade: req.body.especialidade,
        dataConsulta: req.body.data_consulta,
        alergias: req.body.alergias,
        infoAdicionais: req.body.info_adicionais
    }
    
    for(val in dadosPessoais){
        if(dadosPessoais[val] == ""){
            if(val.indexOf("data") != -1){
                val = "data de nascimento";
            }
            camposNaoPreenchidos.push(val);
        }
    }

    for(val in dadosConsulta){
        if(dadosConsulta[val] == ""){
            if(val.indexOf("infoAdicionais") == -1){
                if(val.indexOf("data") != -1)
                    val = "data e hora da consulta";
                camposNaoPreenchidos.push(val);
            }
        }
    }

    
    var mensagemAlerta = camposNaoPreenchidos.join(", ").replace(/, ([^,]*)$/, ' e $1');
    var alertaAtivo = (camposNaoPreenchidos.length > 0);
    
    res.render('dados', {mensagemAlerta, alertaAtivo});
})

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
})