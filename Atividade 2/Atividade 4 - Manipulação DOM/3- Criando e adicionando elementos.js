// CRIANDO E ADICIONANDO ELEMENTOS
// o Um novo elemento <h2> com o texto "Lista de Tarefas";
// o Um elemento <ul> com três <li>:
// ▪ "Estudar HTML";
// ▪ "Estudar CSS";
// ▪ "Estudar JavaScript";
// o Adicione tudo isso dentro do body.

const lista =  document.createElement("h2")
lista.innerHTML = "Lista de Tarefas"
document.body.append(lista)


const pjListEl = document.createElement("ul"); //Criar lista
const pjListItem1El = document.createElement("li"); //Adicionando linha
pjListItem1El.innerHTML = "Estudar HTML"; //Atribuindo valor a linha
const pjListItem2El = document.createElement("li"); //Adicionando linha
pjListItem2El.innerHTML = "Estudar CSS"; //Atribuindo valor a linha
const pjListItem3El = document.createElement("li"); //Adicionando linha
pjListItem3El.innerHTML = "Estudar JavaScript"; //Atribuindo valor a linha

document.body.append(pjListEl); //Add a lista ao site
pjListEl.append(pjListItem1El); //Linha 1
pjListEl.append(pjListItem2El); //Linha 2
pjListEl.append(pjListItem3El); //Linha 3
