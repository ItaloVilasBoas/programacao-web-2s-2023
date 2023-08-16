const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const matrizB = [];


console.log("Matriz A:")
matrizA.forEach(element => {
    console.log(element)
});
console.log("Matriz Transposta:")
matrizA.forEach(linha => {
    var lin = 0;
    matrizB[lin] = [];
    for (let col = 0; col < linha.length; col++) {
        matrizB[lin].push(linha[col]);
    }
    lin++;
});
matrizB.forEach(element => {
    console.log(element)
});
