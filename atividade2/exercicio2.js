const matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const matrizB = transporArray(matrizA);

console.log("Matriz A:");
matrizA.forEach(element => {
    console.log(element);
});

console.log("Matriz Transposta:");
matrizB.forEach(element => {
    console.log(element);
});

function transporArray(matriz) {
    const matrizTransposta = new Array(matriz[0].length).fill([]).map(()=>{return new Array(matriz.length)});
    
    for(let lin = 0; lin < matriz.length; lin++){
        for(let col = 0; col < matriz[0].length; col++){
            matrizTransposta[col][lin] = matriz[lin][col];
        }
    }
    return matrizTransposta;
}


