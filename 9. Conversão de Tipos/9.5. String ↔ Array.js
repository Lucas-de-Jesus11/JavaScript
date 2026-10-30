
let school = "SENAI"
console.log(school)
console.log(school[0])

// Leitura completa em laço
for(const i of school){
    console.log(i)
}

// Exibir tamanho
console.log(school.length)

let values = [1, 2, 3, 4, 5, 10, 20]
console.log(values)
console.log(values.join())
console.log(values.join(' '))

values = ["L", "u", "c", "a", "s"]
console.log(values.join(""))

let nome = "Serviço Nacional de Aprendizagem Industrial"
console.log(nome)
console.log(nome.split())
console.log(nome.split(" "))

nome = "Lucas, de Jesus"
console.log(nome.split(', '))