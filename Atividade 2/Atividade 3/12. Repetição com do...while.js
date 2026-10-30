/*Crie uma função que peça um número inicial e faça a contagem até 5 usando
do...while. */

function contar() {
    let number = 1
    do {
        console.log("Número: " + number)
        number++
    } while (number <= 5)
}
contar()