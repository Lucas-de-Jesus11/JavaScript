/*Crie uma função que receba um número e mostre todos os pares de 0 até esse
número. */
function pares(numero) {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
pares(10)