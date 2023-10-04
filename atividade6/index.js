const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('index.html');
})

app.post('/dados', (req, res)=>{
    var nome = req.body.name;
    var endereco = req.body.endereco;
    var telefone = req.body.telefone;
    var dataAgendamento = req.body.data;
    var camposNaoPreenchidos = new Array();

    if(nome == "")
        camposNaoPreenchidos.push("nome");
    if(endereco == "")
        camposNaoPreenchidos.push("endereco");
    if(telefone == "")
        camposNaoPreenchidos.push("telefone");
    if(dataAgendamento == "")
        camposNaoPreenchidos.push("data de agendamento");

    var mensagemAlerta = camposNaoPreenchidos.join(", ").replace(/, ([^,]*)$/, ' e $1');
    var alertaAtivo = (camposNaoPreenchidos.length > 0);
    
    res.render('dados', {nome, endereco, telefone, dataAgendamento, mensagemAlerta, alertaAtivo});
})

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
})