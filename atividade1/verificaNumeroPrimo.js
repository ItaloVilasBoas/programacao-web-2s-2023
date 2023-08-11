do{
    var numDigitado = prompt("Digite um número");
} while(isNaN(numDigitado));

console.log(isNumPrimo(numDigitado));

function isNumPrimo(num) {
    for (let index = num - 1; index > 0; index--) {
        if(num % index == 0 && index != 1){
            return 0;
        }
    }
    return 1;
}