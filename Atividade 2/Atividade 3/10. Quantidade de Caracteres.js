/*Crie uma função que receba uma string e conte quantos caracteres ela possui usando
um loop for. */
function caracteres(num) {
    let contador = 0
    for (let i = 0; i < num.length; i++) {
        contador++
    }
    return contador
}
console.log(caracteres("Olá mundo"))