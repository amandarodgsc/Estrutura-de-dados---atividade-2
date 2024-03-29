function fibonacci(numero) {
    let fibonacciArray = [];
    
    fibonacciArray.push(0);
    fibonacciArray.push(1);

    for (let i = 2; i <= numero; i++) {
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        if (fibonacciArray[i] > numero) {
            break; 
        }
    }

    return fibonacciArray;
}

let userInput = parseInt(prompt("Digite um número inteiro positivo:"));

if (userInput >= 0) {
   
    let fibonacciArray = fibonacci(userInput);
    
    console.log("Sequência de Fibonacci até", userInput + ":");
    console.log(fibonacciArray.join(", "));
} else {
    console.log("Por favor, digite um número inteiro positivo.");
}
