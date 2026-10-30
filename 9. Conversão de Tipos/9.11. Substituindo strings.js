let frase = "Gabriel é um cara legal!"

// replace(localiza, substitui)
console.log(frase.replace("Gabriel", "Natan"))

// Método antigo de internacionalização de separador decimal
let value = 1234.567
console.log(value.toFixed(2).replace(".", ","))