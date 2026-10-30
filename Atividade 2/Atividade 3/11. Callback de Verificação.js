/*Crie uma função que receba um número e um callback:
Se o número for par, o callback mostra "É par".
Se for ímpar, o callback mostra "É ímpar". */

function verificarNumero(numero) {
    if (numero % 2 === 0) {
        console.log("É par")
    } else {
        console.log("É impar")
    }
}
verificarNumero(2)
