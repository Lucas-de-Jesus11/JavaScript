// Forma moderna 
// document.querySelector()
// document.querySelectorAll()
// Element.querySelector()
// Element.querySelectorAll()

console.log(document.querySelectorAll("*")) // Universal
console.log(document.querySelector("#person-name"))

// OBS: ID's só podem ser usados uma vez dentro de uma página html 
console.log(document.querySelectorAll("p")) // Tag
console.log(document.querySelectorAll(".title")) // Class
console.log(document.querySelector(".title")) // Se puxar sem o "All", ele retorna o primeiro elemento que encontrar

console.log(document.querySelectorAll("a[href]")) // Atributo
console.log(document.querySelectorAll("a[href ='https://www.linkedin.com/in/lucasdejesus1/']")) // Atributo específico

// Iterando toda a árvore DOM... 
for (const El of document.querySelectorAll("*")){
    console.log("el", El)
}