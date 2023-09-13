const express = require('express');
const estoque = require('./estoque/estoque');
const app = express();

const PORT = 8080;

app.get("/", (req, res)=>{
    res.send("API Estoque");
});
app.get("/api/adicionar/:id/:nome/:qtd", (req, res)=>{
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    let prod = estoque.criar_produto(id, nome, qtd);
    estoque.adicionar_produto(prod);
    res.json(prod);
});

app.get("/api/listar", (req, res)=>{
    res.json(estoque.listar_produtos());
});

app.get("/api/editar/:id/:qtdAtual", (req, res)=>{
    let id = req.params.id;
    let qtdAtual = req.params.qtdAtual;

    res.json(estoque.editar_produto(id, qtdAtual));
});

app.get("/api/remover/:id/", (req, res)=>{
    let id = req.params.id;

    res.json(estoque.remover_produto(id));
});

app.listen(PORT, ()=>{
    console.log(`app rodando na porta ${PORT}`);
});

