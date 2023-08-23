const matrizA = [
    [1, 2, 3],
    [-2, 0, 4]
];
const matrizB = [
    [2, 3],
    [0, 1],
    [-1, 4]
];

console.log("Matriz A:");
matrizA.forEach(element => {
    console.log(element);
});

console.log("Matriz B:");
matrizB.forEach(element => {
    console.log(element);
});

console.log("Matriz A x B:");
if(matrizA[0].length != matrizB.length){
    console.log("Não é possível calcular")
} else{
    const matrizResult = multiplicaMatrizes(matrizA, matrizB);
    matrizResult.forEach(element => {
        console.log(element);
    });   
}

function multiplicaMatrizes(matrizA, matrizB) {
    const matrizProduto = new Array(matrizB[0].length).fill([]).map(()=>{return new Array(matrizA.length)});;

    for(let linA = 0; linA < matrizA.length; linA++){
        for(let colB = 0; colB < matrizB[0].length; colB++){
            let valMatrizNova = obtemValorElemMatrizMult(matrizA, matrizB, linA, colB);
            matrizProduto[linA][colB] = valMatrizNova;
        }
    }
    return matrizProduto;
}
function obtemValorElemMatrizMult(matrizA, matrizB, linA, colB){
    let valMatrizNova = 0;
    for(let colA = 0; colA < matrizA[0].length; colA++){
        valMatrizNova += matrizA[linA][colA] * matrizB[colA][colB];
    }
    return valMatrizNova;
}