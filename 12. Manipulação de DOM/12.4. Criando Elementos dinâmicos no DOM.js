const subTitleEl = document.createElement("h2"); //Criar elemento a partir de uma TAG
subTitleEl.innerHTML = "Projetos";
document.body.append(subTitleEl); //Add o Sub-titulo ao site

const pjListEl = document.createElement("ul"); //Criar lista
const pjListItem1El = document.createElement("li"); //Adicionando linha
pjListItem1El.innerHTML = "TODO MVC"; //Atribuindo valor a linha
const pjListItem2El = document.createElement("li"); //Adicionando linha
pjListItem2El.innerHTML = "Github API"; //Atribuindo valor a linha
const pjListItem3El = document.createElement("li"); //Adicionando linha
pjListItem3El.innerHTML = "e-Commerce"; //Atribuindo valor a linha

document.body.append(pjListEl); //Add a lista ao site
pjListEl.append(pjListItem1El); //Linha 1
pjListEl.append(pjListItem2El); //Linha 2
pjListEl.append(pjListItem3El); //Linha 3
