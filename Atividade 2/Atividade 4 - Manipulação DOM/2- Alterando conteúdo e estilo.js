// Altere o texto do <h1> para "Manipulando o DOM com JavaScript".
const titulo = document.getElementById("titulo")
titulo.textContent ="Manipulando DOM com JavaScript"

// Altere a cor do texto para azul e o tamanho da fonte para 40px.
titulo.style.color = "blue"
titulo.style.fontSize = "40px"

// Faça o parágrafo com classe "descricao" ficar com fundo amarelo e texto negrito.
const descricao = document.querySelector(".descricao")
descricao.style.background = "yellow"
descricao.style.fontWeight = "bold"

// Oculte o segundo .box (display: none) e depois mostre novamente (display: block).
const boxes = document.getElementsByClassName("box")
boxes[1].style.display = "none"
boxes[1].style.display = "block"