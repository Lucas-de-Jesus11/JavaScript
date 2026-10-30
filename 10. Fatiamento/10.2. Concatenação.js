let set1 = [1, 2, 3, 4, 5];
let set2 = [6, 7, 8, 9, 10];
let set3 = [11, 12, 13];

console.log(set1 + set2)
console.log(typeof(set1 + set2))//Na pratica cria uma string. Jeito errado
console.log([set1, set2])//Jeito errado também

console.log(set1.concat(set2)) //Concatenação de um array
console.log(set1.concat(set2).concat(set3))