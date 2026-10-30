// Crie uma <section> e dentro dela:
const section = document.createElement("section")

// Um <h2> com o texto "Sobre o Curso";
const sobre = document.createElement("h2")
sobre.textContent = "Sobre o Curso"

// Dois <p> com textos explicativos, por exemplo:
// "O curso aborda fundamentos de programação e web."
const p1 = document.createElement("p")
p1.textContent = "O curso aborda fundamentos de programação e web."

// Dois <p> com textos explicativos, por exemplo:
// "Aprendemos sobre HTML, CSS e manipulação do DOM com JavaScript."
const p2 = document.createElement("p")
p2.textContent = "Aprendemos sobre HTML, CSS e manipulação do DOM com JavaScript."

// Adicione essa seção ao final do body.
section.append(sobre)
section.append(p1)
section.append(p2)

document.body.append(section)
