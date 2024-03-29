function encontrarIndices(vetor, numero) {
    let indices = [];
    
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    
    if (indices.length === 0) {
        console.log("O número", numero, "não foi encontrado no vetor.");
    } else {
        console.log("O número", numero, "foi encontrado nos seguintes índices:", indices);
    }
}

let vetor = [1, 2, 3, 4, 2, 5, 2];
let numero = 2;
encontrarIndices(vetor, numero);
