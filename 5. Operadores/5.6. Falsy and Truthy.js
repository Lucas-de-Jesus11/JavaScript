// Retorna se o elemento é true ou false 
// Operador ternário: ?:
// Sintaxe do operador ternario: condição ? valor_se_verdadeiro : valor_se_falso

//Falsy
console.log(0 ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
// Se o usuário nao digitar nada no navegador, ele entende como "false"

//Truthy
console.log(1 ? "verdadeiro" : "falso")
console.log(Infinity ? "verdadeiro" : "falso")
console.log("0" ? "verdadeiro" : "falso")

let nome = ""
console.log(nome ? "Tem nome" : "Ta vazia")

let idade = 18
console.log(idade >= 18 ? "Maior de idade": "Menor de idade")

let lista = [1, 2, 3]
console.log(lista.length > 0 ? "Ta cheia" : "Ta vazia")
//console.log(0 ? :) //Sempre precisa colocar um valor antes e depois do "

// O valor é considerado falso quando:
console.log(false ? "verdadeiro" : "falso");
console.log(0 ? "verdadeiro" : "falso");
console.log(-0 ? "verdadeiro" : "falso");
console.log(0n ? "verdadeiro" : "falso");
console.log("" ? "verdadeiro" : "falso");
console.log(null ? "verdadeiro" : "falso");
console.log(undefined ? "verdadeiro" : "falso");

// O valor é considerado verdadeiro quando:
console.log(true ? "verdadeiro" : "falso");
console.log({} ? "verdadeiro" : "falso");
console.log([] ? "verdadeiro" : "falso");
console.log(1 ? "verdadeiro" : "falso");
console.log(1.2 ? "verdadeiro" : "falso");
console.log("0" ? "verdadeiro" : "falso");
console.log(-1 ? "verdadeiro" : "falso");
console.log("false" ? "verdadeiro" : "falso");
console.log(-Infinity ? "verdadeiro" : "falso");