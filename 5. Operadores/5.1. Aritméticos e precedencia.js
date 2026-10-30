// Operadores básicos: + - / *
// Precedencia e/ou prioreidade: (), *ou/, +ou-

// Media = soma dos termos / quantidade dos termos

// const media = 10 + 10 + 10 / 3; //errado por falta dos parenteses
const media = (10 + 10 + 10) / 3
console.log(media)

/*
Esta errado o calculo, devido a falta de ()
A divisão tem prioridade na soma
Primeiro ele esta dividindo 10/3 e depois somando*/

console.log(2 + 3 * 4); //14, primeiro a multplicação
console.log((2 + 3)* 4); //20, primeiro o parentese
console.log(2 * 3 **2);// 18, primeiro a potencia
console.log((20 / 5) * 2); //8, primeiro a divisão
console.log((2 * 20) / 5); //8
console.log((50 % 7) + 3 ** 2 * 2)// 19
