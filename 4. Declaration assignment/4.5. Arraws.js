const pessoa1 = "Miguel"
const pessoa2 = "Pedro"
const pessoa3 = "João"
//...
const pessoa999 = "Nycolas"

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
//...
console.log(pessoa999)

/*
Esta não é a forma correta de se fazer isso
Para isso utilizamos "arrays" (listas)
*/

// Variaveis + indice(que sempre inicia na posição zero)
const pessoas = ["Miguel", "Pedro", "João", "Nycolas"]
console.log(pessoas[2])
console.log(pessoas[4]) //Indefinido pq não existe valor nessa posição 

pessoas[1] = "Hadassa" //Atualizando a posição 1
console.log(pessoas)

pessoas[4] = "Kaique"//Adicionando elemento no indice 4
console.log(pessoas)
console.log(pessoas.length) //Tamanho da lista

/*Primeiro: indice inicial
Segundo: Quantidade a remover*/

pessoas.splice(1, 1)
console.log(pessoas)

// "pop()" remove o ultimo elemento
pessoas.pop()
console.log(pessoas)

// shift() remove o primeiro
pessoas.shift()
console.log(pessoas)

// push() adiciona elemento no final 
pessoas.push("Thiago")
console.log(pessoas)

// "unshift" adiciona elemento no inicio 
pessoas.unshift("Kauã")
console.log(pessoas)
console.log(pessoas.length)

//Arrays mais complexas
// const persons = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
const persons = [
    {nome: "Lucas", age: 20},
    {nome: "Natan", age: 25},
    {nome: "Miguel", age: 19},
    "Alexandre", //Não seria uma boa prática misturar os tipos dentro da array 
]

console.log(persons)
console.log(persons[0])
console.log(persons[1])
console.log(persons[2])

console.log(persons[2].age)
console.log(persons[0].nome)