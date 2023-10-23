calculadoraMetodos = require("../calculadora/calculadoraMetodos");

class CalculadoraController {
    static calcular(request, response){
        let num1 = request.body.primeiro_numero
        let num2 = request.body.segundo_numero
        let op = request.body.operador
        let resultado;

        switch(op){
            case '+':
                resultado = calculadoraMetodos.somar(num1, num2);
                break;
            case '-':
                resultado = calculadoraMetodos.subtrair(num1, num2);
                break;
            case '*':
                resultado = calculadoraMetodos.multiplicar(num1, num2);
                break;
            case '/':
                resultado = calculadoraMetodos.dividir(num1, num2);
                break;
        }

        response.render('calcular', {num1, num2, op, resultado});
    }
}

module.exports = CalculadoraController;