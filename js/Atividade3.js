let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

let numeros = [numero1, numero2, numero3];

console.log("Array original:", numeros);

numeros.reverse();

console.log("Array com números invertidos:", numeros);
