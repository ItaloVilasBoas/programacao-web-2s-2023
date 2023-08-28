# Promise
Um objeto promise representa uma conclusão ou falha de um operação assíncrona e seu valor resultante.
Ela funciona como um objeto, devendo ser instanciada com a palavra chave **new** e recebe uma função com dois argumentos **resolve** e **reject**.
~~~ javascript
const myPromise = new Promise(function(resolve, reject) {});
~~~
Esses dois parametros que essa function recebe são dois callbacks que indicarão posteriormente se a função foi executado com sucesso 
~~~ javascript
myPromise = new Promise((resolve, reject) => {
    if(operacaoDeuCerto){
        resolve();
    } else if(operacaoNaoDeuCerto){
        reject();
    }
}
//podemos também retornar alguns valores em casso sucesso ou erro
myPromise = new Promise((resolve, reject) => {
    if(operacaoDeuCerto){
        resolve({msg: 'operação executada com sucesso', data: .../* dados*/});
    } else if(operacaoNaoDeuCerto){
        reject({msg: 'a operação não foi concluída', error: .../* objeto de erro*/});
    }
}
~~~

#### propriedades de um objeto Promise
Um objeto javascript promise pode estar em 3 estados diferentes:
Pending - (pendente) quando o objeto está trabalhando e o resultado ainda é indefinido.
Fulfilled - Quando o objeto Promise é concluída com sucesso
Rejected - Quando o objeto Promise é rejeitado e o resultado é um erro

### consumindo uma promise
Para podermos usar uma promise declarada usamos **.then**, para obter as informações de uma promise resolvida
**.then** possui dois paramêtros opcionais um para sucesso e outro para falha
podemos também usar **.catch** para obter informações de uma promise rejeitada
~~~ javascript
myPromise.then(
    function(value){ /* código se der sucesso */},
    function(error){ /* o que fazer se der erro */ }
);
//ou podemos fazer também desta maneira
myPromise()
    .then(result => { /* código se der sucesso */}).
    .catch(error => { /* se der erro */});
~~~

### exemplo de promise sendo usada
O código abaixo serve para ler e parsear um arquivo .csv enviando o conteúdo dele para um banco de dados, nele a promise é chamada ao executar o método insertCidade(con) e caso ocorra algum erro ela mostra no console
~~~ javascript
insertCidade = async (con) => {
    return new Promise((resolve, reject) => {
        fs.createReadStream('resources/cidade_siafi.csv').pipe(csv.parse({columns: true}, async (err, records) =>{
            if (err) reject(err)
            for(let cidade of records){
                await con.execute('INSERT INTO '+nomeDB+ '.cidade (uf_id , nome, latitude, longitude, cod_ibge, cod_siafi) VALUES (? ,?, ?, ?, ?, ?)', 
                [cidade.codigo_uf, cidade.nome, cidade.latitude, cidade.longitude, cidade.codigo_ibge, cidade.siafi_id]);
                console.log(cidade.nome + " " + cidade.codigo_uf + " adicionado com sucesso")
            }
            resolve();
        }));
    });
}
await insertCidade(con).catch(err => {
    console.log(err);
});
~~~