//02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie
//sua própria função para isso.

function ordenarTresNumeros(array) {
    if (array[0] > array[1] && array[0] > array[2]) {
        let temp = array[0];
        array[0] = array[2];
        array[2] = temp;
    }

    if (array[1] > array[2]) {
        let temp = array[1];
        array[1] = array[2];
        array[2] = temp;
    }
    return array;
}

let numeros = [5, 2, 7];
console.log("Antes da ordenação:", numeros);
numeros = ordenarTresNumeros(numeros);
console.log("Após a ordenação:", numeros);
