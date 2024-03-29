class Pilha {
    constructor() {
        this.itens = [];
    }

    // Método para empilhar um elemento
    empilhar(elemento) {
        this.itens.push(elemento);
    }

    // Método para desempilhar um elemento
    desempilhar() {
        if (this.estaVazia()) {
            return null;
        }
        return this.itens.pop();
    }

    // Método para verificar se a pilha está vazia
    estaVazia() {
        return this.itens.length === 0;
    }
}

function processarNumeros(numeros) {
    let pilha = new Pilha();

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (numero % 2 === 0) {
            // Se o número for par, empilhe na pilha
            pilha.empilhar(numero);
        } else {
            // Se o número for ímpar, desempilhe um número da pilha
            if (pilha.estaVazia()) {
                console.log("A pilha está vazia. Não é possível desempilhar.");
            } else {
                pilha.desempilhar();
            }
        }
    }

  
    while (!pilha.estaVazia()) {
        console.log("Elemento desempilhado:", pilha.desempilhar());
    }
}

let numeros = [];
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    numeros.push(numero);
}

console.log (processarNumeros(numeros));
