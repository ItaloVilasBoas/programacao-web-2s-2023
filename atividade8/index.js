const PORT = 8080;
const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

const calcularRouter = require('./routes/calcularRouter');
const indexRouter = require('./routes/indexRouter');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/calcular", calcularRouter);

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
})
