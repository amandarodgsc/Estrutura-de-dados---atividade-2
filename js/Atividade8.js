function decimalParaHexadecimal(numero) {
    // Verifica se o número é válido
    if (numero < 0 || !Number.isInteger(numero)) {
        return "Número inválido";
    }

    // Converte o número decimal para hexadecimal
    let hexadecimal = numero.toString(16).toUpperCase();

    return hexadecimal;
}

// Exemplo de uso:
let numeroDecimal = 255;
let hexadecimal = decimalParaHexadecimal(numeroDecimal);
console.log("O número decimal", numeroDecimal, "em hexadecimal é:", hexadecimal);
