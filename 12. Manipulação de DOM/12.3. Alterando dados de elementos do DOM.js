const titleEl = document.querySelector("#person-name")
console.log(titleEl.textContent) // Mostrar o valor
console.log(titleEl.innerHTML) // Mostrar o valor em HTML

console.log(titleEl.id) // Mostrar id
console.log(titleEl.className) // Mostrar a classe
console.log(titleEl.tagName) //Mostrar a TAG

titleEl.textContent = "Lucas de Jesus Santos Carvalho" //Alterando o valor
titleEl.innerHTML = "<i>Lucas de Jesus</i>" // Aqui o texto interpreta tags html (ao contrario do textContent que é só texto)

titleEl.style.color = "red" //Alterando a cor
titleEl.style = "color: white; background-color:black" //Manipulando CSS
titleEl.style.fontSize = "70px" //Alternativa
titleEl.style.border = "5px solid red"

titleEl.style.display = "nome" //Esconder
titleEl.style.display = "block" //Exibir