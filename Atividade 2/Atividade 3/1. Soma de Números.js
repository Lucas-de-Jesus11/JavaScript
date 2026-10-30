/*Crie uma função que receba um número e calcule a soma de todos os números de 1
até ele usando um loop for. */

function sum(n) {
    let res = 0
    for (let i = 1; i <= n; i++) {
        res += i
    }
    return res
}
console.log(sum(5))// Saída: 15
