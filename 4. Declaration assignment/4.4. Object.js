const person = {
    name : "Lucas",
    age: 20,
    address: {
        street: "Av. Brasil",
        city: "São Paulo",
    },
};

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(
    `${person.name} tem ${person.age} anos e reside na cidade de ${person.address.city}`
)

/*OBS: "const" não pode ter seu valor atualizado. 
Porém, valores dentro de "object" e "array", podem ser stualizado dentro de uma "const"*/

person.name = "Jesus" //Atualizando
person.address.city = "Campinas"
person.weight = 50 //Inseindo novas informações

console.log(person)