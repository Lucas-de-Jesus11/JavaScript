/*Dado o array:
let nomes = ["Ana", "Pedro", "João", "Maria"];
Dentro de uma função, exiba todos os nomes. */

let nomes = ["Ana", "Pedro", "João", "Maria"]
function exibirname(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}
exibirname(nomes)