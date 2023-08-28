# Arrow Function
#### sintaxe 
As funções são blocos de construção básicos em JavaScript. Uma função é um conjunto de instruções que executam uma tarefa e retornam um valor.
~~~ javascript
function nomeDaFuncao(parametro1, parametro2){ 
    return valorRetorno;
} 
~~~

Funções arrow nos permite escrever uma função com um sintaxe mais curta, podemos escrever funções arrow das seguintes formas
~~~ javascript
(parametro1, parametro2) => { //outra forma de escrever a função acima usando arrow function
    return valorRetorno;
} 
(parametro1, parametro2) =>  valorRetorno; //como ela so possui uma linha e uma instrução de retorno não há necessidade da palavra-chave return e podemos também remover as chaves 
parametro1 =>  retorno; //Podemos simplica-la ainda mais em casos onde ela possua somente um parametro e um retorno de valor, removendo também os parênteses da declaração de parâmetros
(val) => "Hello World!" + val;//Funções arrow retornarão um valor por padrão como visto nesse exemplo e nos de cima
~~~
Assim como funções, funções arrow aceitarão parâmetros rest e parâmetros padroes
~~~ javascript
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
~~~
Mas se deseja retornar objetos literais, a sintaxe em arrow function será um pouco diferente
~~~ javascript
() => { foo: 1 };//retorna undefined, isso porque aqui o foo aqui é tratado como título e não uma chave dentro de um objeto
() => ({foo: 1});//se deve envolver o objeto literal em parênteses
~~~
#### diferenças 
As maiores diferenças entre uma função padrão e funções arrow está no fato delas lidarem diferente com o **this** e não poderem ser usada como constructors;
~~~ javascript
//Em funções normais this, representa o objecto que chamou aquela função, podendo ser um botão, o document a janela ou qualquer outra coisa.
document.getElementById("btn").addEventListener("click", hello);
hello = function() {
  console.log(this);//aqui por exemplo, this retornaria o objecto botão do HTML
}
//Já em funções arrow como ele não possui o próprio this, ele sempre retornará o objeto em que a função foi definida
document.getElementById("btn").addEventListener("click", hello2);
hello2 = () => {
  console.log(this);//no caso aqui retornará o objeto window
}
~~~