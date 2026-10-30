// Selecione todos os <li> da lista criada.
// Altere a cor do texto para verde escuro.
// Aumente o tamanho da fonte para 20px.
// Dica: use querySelectorAll() e um laço for...of para percorrer os itens.

const itensLista = document.querySelectorAll("li")
for (const li of itensLista) {
    li.style.color = "darkgreen";
    li.style.fontSize = "20px"
}

