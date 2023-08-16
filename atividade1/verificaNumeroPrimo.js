console.log(isNumPrimo(4));
function isNumPrimo(num) {
    if(num % 2 === 0)
        return 0;
    for (let index = 3; index < num; index+=2) {
        if(num % index == 0){
            return 0;
        }
    }
    return 1;
}
