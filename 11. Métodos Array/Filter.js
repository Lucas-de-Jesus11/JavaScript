const number = [10, 8, 1, 15, 13.6, 7, 19, 99, -1]
let newList = []

// Montar uma nova lista com os números maiores que 10
for (const n of number) {
    if (n > 10) {
        newList.push(n)
    }
}
console.log(newList)

// Utilizando filter
const gt10 = function (item) {
    return item > 10
}
let res = number.filter(gt10)
console.log(res)

// Simplificando mais ainda:
let result = number.filter((n) => n > 10)
console.log(result)

// Descobrir maiores de 18 anos 
const people = [
    {name: "Lucas", gender: "M", age: 20},
    {name: "Ana", gender: "F",age: 15},
    {name: "Gabriel", gender:"M",age: 27},
    {name: "Maria", gender:"F",age: 18},
    {name: "Bruno", gender:"M",age: 45},
]
const m = people.filter((p) => p.age >= 18)
console.log(m)
const n = people.filter((p) => p.age >=18 && p.gender === "F")
console.log(n)
const x = people.filter((p) => p.age >= 18 && p.age <= 25 && p.gender === "M")
console.log(x)