const calc = require("./util/calculadora");
const express = require('express');
const PORT = 8080;

const app = express();

app.get('/hello', (req, res) =>  res.send("Olá, mundo web!"));
app.get('/ola', (req, res) =>  res.send("Hello World"));
app.get('/soma/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`)
});

app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
})

