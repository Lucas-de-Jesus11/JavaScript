let people = ["Natan", "Gabriel", "Valdinei", "James", "Vagner"];

// Retornar elementos específicos de um array:
console.log(people[2]);

// Retornar "fatias" de um array:
console.log(people.slice(2));
console.log(people.slice(1, 3));

// Adicionar novos elementos no array(inicio e fim)
people.push("Fernanda"); //Adiciona no fim
people.unshift("Celso"); //Adiciona no inicio
console.log(people)

// Remover elementos no array (inicio e fim)
people.pop() //Remove o elemento do fim
people.shift() //Remove o elemento do fim
console.log(people)
console.log(people.shift())//Retornar elemento removido
console.log(people.pop())//Retornar elemento removido
console.log(people);

// Remover "fatias" de um array:
people = ["Natan", "Gabriel", "Valdinei", "James", "Vagner"];
people.splice(2) //Remove da posição 1 em diante
console.log(people)

people = ["Natan", "Gabriel", "Valdinei", "James", "Vagner"];
people.splice(0, 2) //Remove da 0 e 2 valores a frente
console.log(people)

// Localizar posição do elemento:
people = ["Natan", "Gabriel", "Valdinei", "James", "Vagner"];
console.log(people.indexOf("James")) //Localiza a posição do James

let index = people.indexOf("Valdinei")
people.splice(index, 1) //Remove o valor solicitado
console.log(people)