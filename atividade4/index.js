const calc = require("./util/calculadora");
const express = require('express');
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send(`Calculadora`)
});
app.get('/somar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`)
});
app.get('/subtrair/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`)
});
app.get('/multiplicar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`)
});
app.get('/dividir/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`)
});

app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
})

