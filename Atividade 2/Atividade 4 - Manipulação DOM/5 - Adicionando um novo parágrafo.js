// Crie um novo parágrafo (<p>) abaixo da lista com o texto:
// "Essas são as principais tarefas de estudo."
const NovoP = document.createElement("p")
NovoP.textContent = "Essas são as principais tarefas de estudo."

// Altere o estilo:
// Cor do texto: marrom;
NovoP.style.color = "brown"

// Estilo da fonte: itálico.
NovoP.style.fontStyle = "italic"

document.body.append(NovoP)