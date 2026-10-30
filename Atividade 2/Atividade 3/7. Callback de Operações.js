/*Crie uma função que receba dois números e um callback.
O callback deve ser: soma, subtração, multiplicação ou divisão. */

function soma(a, b) {
    return a + b
}
function subtração(a, b) {
    return a - b
}
function multiplicação(a, b) {
    return a * b
}
function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero"
    }
    return a / b
}
function calcular(num1, num2, operacao) {
    const resultado = operacao(num1, num2)
    console.log(`Resultado: ${resultado}`)
}
calcular(10, 5, soma)
calcular(10, 5, subtração)
calcular(10, 5, multiplicação)
calcular(10, 5, divisao)