// Hierarquia do DOM(Document Object Model)
// Document -> Nodes -> Elements -> Attributes 

console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.body.h1) // Errado, só usando métodos exploratórios

// Acessando os nós do DOM 
// document.getElementById  -> Recupera elemento por id 
const idEl = document.getElementById("person-name")
console.log(idEl)

// document.getElementsByTagName() -> Recupera elemento por TAG 
const tagEl = document.getElementsByTagName("p")
console.log(tagEl)

// document.getElementsByClassName()  -> Recupera elemento por classe 
const classEl = document.getElementsByClassName("title")
console.log(classEl)

// Iterando...
for (const El of classEl){
    console.log("El", El)
}