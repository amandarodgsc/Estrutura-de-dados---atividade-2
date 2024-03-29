class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(elemento) {
        this.itens.push(elemento);
    }

    desempilhar() {
        if (this.estaVazia()) {
            return null;
        }
        return this.itens.pop();
    }

    estaVazia() {
        return this.itens.length === 0;
    }
}

function processarNumeros(numeros) {
    let pilhaPar = new Pilha();
    let pilhaImpar = new Pilha();

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (numero % 2 === 0) {
            pilhaPar.empilhar(numero);
        } else {
            pilhaImpar.empilhar(numero);
        }

        if (numero === 0) {
            if (pilhaPar.estaVazia() || pilhaImpar.estaVazia()) {
                console.log("Erro: Alguma das pilhas está vazia.");
            } else {
                pilhaPar.desempilhar();
                pilhaImpar.desempilhar();
            }
        }
    }

    console.log("Elementos desempilhados da pilha par:");
    while (!pilhaPar.estaVazia()) {
        console.log(pilhaPar.desempilhar());
    }

    console.log("Elementos desempilhados da pilha ímpar:");
    while (!pilhaImpar.estaVazia()) {
        console.log(pilhaImpar.desempilhar());
    }
}

let numeros = [];
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    numeros.push(numero);
}

console.log (processarNumeros(numeros));
