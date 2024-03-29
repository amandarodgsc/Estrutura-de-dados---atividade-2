function criarMatriz(linhas, colunas) {
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = (i + 1) + (j + 1);
        }
    }

    return matriz;
}

let numLinhas = parseInt(prompt("Digite a quantidade de linhas:"));
let numColunas = parseInt(prompt("Digite a quantidade de colunas:"));

if (numLinhas > 0 && numColunas > 0) {
    let matriz = criarMatriz(numLinhas, numColunas);

    console.log("Matriz gerada:");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
} else {
    console.log("Por favor, digite valores válidos para linhas e colunas (maiores que zero).");
}
