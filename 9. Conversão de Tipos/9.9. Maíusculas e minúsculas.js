let frase = "Meu nome é James. James Bond!"
console.log(frase)
console.log(frase.toLocaleLowerCase()) // Minuscula
console.log(frase.toLocaleUpperCase()) // Maiuscula

function maiuscula(frase){
    return frase
    .split(" ")
    .map((frase) => frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase())
    .join(" ")
}
console.log(maiuscula("lucas de jesus"))