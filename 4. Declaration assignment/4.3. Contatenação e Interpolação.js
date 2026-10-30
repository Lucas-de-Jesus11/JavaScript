let nome, idade

nome = "Lucas"
idade = 20
endereco = {
    logadouro: "Av. Brasil",
    cidade: "São Paulo",
    estado: "SP"
}

console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("Endereço:", endereco)

// Concatenação (antigo)
console.log(nome + " tem " + idade + " anos. Reside em " + endereco)
console.log(nome + " tem " + (idade+1) + " anos.")

// Interpolação (novo)
// ```````Crase
console.log(`${nome} tem ${idade} anos. Reside em ${endereco}`)
console.log(`${nome} tem ${idade+1} anos.`)

/*JS não consegue transformar "object" em "string"
Para isso é necessário usar o método "JSON.stringfy"*/

// Concatenação (antigo)
console.log(nome + " tem " + idade + " anos. Reside em " + endereco.logadouro)
console.log(nome + " tem " + idade + " anos. Reside em " + JSON.stringify(endereco))

// Interpolação (novo)
console.log(`${nome} tem ${idade} anos. Reside em ${endereco.logadouro}`)
console.log(`${nome} tem ${idade} anos. Reside em ${JSON.stringify(endereco)}`)