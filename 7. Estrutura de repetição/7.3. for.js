//for é composta por 3 etapas
// for(variavel) inicial, condição para continuar, condição incremento
for (let i = 1; i <= 10; i++) {
    console.log("Contagem progressiva: " + i);
}
console.log("Fim do programa");


for (let i = 10; i >= 0; i--) {
    console.log("Contagem regressiva: " + i);
}
console.log("Fim do programa");

//Break
//Interrompe o laço antes do final
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Parando no " + i);
        break;
    }
    console.log("i = " + i)
}

// Continue 
// Pula para a próxima iteração sem executar o restante do código
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("i = " + i)
}

// Laço aninhado (loop dentro de loop):
// Bom para trabalhar com tabelas  ou combinações
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i= ${i}, j = ${j}`);
    }
}