/*Crie uma função que receba um número e mostre a tabuada dele até 10. Use for e
depois faça uma versão com while. */

// Tabuada com for
function tabuadaFor() {
    let numero = 2
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}
tabuadaFor()

//Tabuada com while
function tabuadaWhile() {
    let num = 2
    let i = 1
    while (i <= 10) {
        let result = num * i
        console.log(`${num} x ${i} = ${result}`)
        i++
    }
}
tabuadaWhile()