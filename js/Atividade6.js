function calcularFatorial(numero) {
    let fatoriais = [];

    fatoriais.push(1);

    for (let i = 1; i <= numero; i++) {
        let fatorial = i * fatoriais[i - 1];
        fatoriais.push(fatorial);
    }

    return fatoriais;
}

let userInput = parseInt(prompt("Digite um número inteiro positivo:"));

if (userInput >= 0) {
   
    let fatoriais = calcularFatorial(userInput);

    for (let i = 0; i <= userInput; i++) {
        console.log("Fatorial de", i + ":", i + "! =", fatoriais[i]);
    }
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}
