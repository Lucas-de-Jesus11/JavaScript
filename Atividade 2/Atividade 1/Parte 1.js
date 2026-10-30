/*
Parte 1 – Variáveis e Tipos de Dados
1. Crie uma variável que, quando exibida no console, mostre o valor Infinity.*/

var valorInfinito = 1 /0 
console.log(valorInfinito)

/*2. Crie uma variável com valor NaN usando Number() de forma proposital
(tente converter algo que não é número).*/

var valorInvalido = Number("Lucas")
console.log(valorInvalido)

/*3. Crie uma variável com seu nome completo. Depois, crie outra variável que
armazene o total de caracteres dessa string usando .length.*/
var NomeCompleto = "Lucas de Jesus"
var qtdCatacter = NomeCompleto.length
console.log(qtdCatacter)

/*4. Crie uma variável sem valor atribuído, exiba no console e comente no código
qual tipo aparece.*/
var valorIndefinido
console.log(valorIndefinido)
// Tipo: underfined

/*5. Crie uma constante chamada PI com valor 3.14. Depois, tente alterar o valor
e comente no código o que aconteceu.*/
const PI = 3.14
PI = 10
// TypeError: Assignment to constant variable.
// Não é possivel alterar o valor de uma constante