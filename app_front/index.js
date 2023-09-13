const express = require('express');
const mustache = require('mustache-express');
const app = express();
const PORT = 8080;

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/:nome', (req, res)=>{
    let nome = req.params.nome;
    res.render('index.html', {nome});
})

app.post('/processa_form', (req, res)=>{
    var teste = req.body;
    res.render('processaForm');
})

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
})