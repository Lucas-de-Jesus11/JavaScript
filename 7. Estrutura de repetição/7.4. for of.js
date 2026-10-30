const nomes = ["Miguel", "Pedro", "João"]
for (let i = 0; i < 3; i++) {
    console.log(nomes[i]);
}

//Se houver uma lista maior
const convidados = ["Miguel", "Pedro", "João", "Nycolas", "Hadassa"];
for (let i = 0; i < convidados.length; i++) {
    console.log(convidados[i]);
}

// "for of" percorre valores de arraws, stringgs ou coleções iteraveis
const pessoas = [
    "Miguel", 
    "Pedro", 
    "João", 
    "Nycolas", 
    "Hadassa", 
    "Natan", 
    "Valdinei", 
    "James", 
    "Gabriel",
];
for (const nome of pessoas){
    console.log(nome);
}

const palavra = "SENAI"
for (const letra of palavra){
    console.log(letra);
}