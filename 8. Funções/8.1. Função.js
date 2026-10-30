console.log("Olá, Lucas. Seja bem vindo ao Senai");
console.log("Olá, Natan. Seja bem vindo ao Senai");
console.log("Olá, James. Seja bem vindo ao Senai");
console.log("Olá, Valdinei. Seja bem vindo ao Senai");
console.log("Olá, Gabriel. Seja bem vindo ao Senai");

// Ao invés de ficar assim , podemos criar funções
function cumprimentos(){
    console.log("Olá, Lucas. Seja bem vindo ao Senai");
}
cumprimentos()

//Acrescentar valores:
function cumprimentos(nome, sobrenome){
    console.log(`Olá, ${nome} ${sobrenome}. Seja bem vindo ao Senai`);
}
cumprimentos("Lucas", "de Jesus")