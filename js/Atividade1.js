function ordenarNumeros(array) {
    if (array[0] > array[1]) {
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }
    return array;
}

let numeros = [5, 2];
console.log("Antes de ordenar:", numeros);
numeros = ordenarNumeros(numeros);
console.log("Depois de odernar:", numeros);
