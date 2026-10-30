/*20.Crie um array com 5 nomes de alunos. Mostre no console o tamanho do
array e depois altere o último nome para "Aluno Novo".
*/
var alunos = ["Lucas", "Nantan", "Gabriel", "James", "Gabriel"]
console.log(alunos.length)
alunos[4]= "Aluno novo"
console.log(alunos)

/*21.Crie um objeto representando um livro com titulo, autor e ano. Adicione a
propriedade editora e depois remova a propriedade ano.*/
var livros = {
    titulo: "O Hobbit",
    autor: "Kaique",
    ano: 1995
}
livros.propriedade = "J.R.R."
delete livros.ano
console.log(livros)

/*22.Crie um array com 3 objetos representando carros (marca, modelo).
Altere o modelo do segundo carro.
Exiba apenas a marca do primeiro carro.*/
var carros = [
    {marca: "Volkswagem", modelo: "Golf"},
    {marca: "Chevrolet", modelo: "Onix"},
    {marca: "Fiat", modelo: "Toro"}
]
carros[1].modelo = "Prisma"
console.log(carros[0].marca)
console.log(carros)

/*23.Crie um array com 4 elementos e altere o primeiro e o último elemento para
"Alterado".*/
var elementos = [1, 2, 3, 4]
elementos[0] = "Alterado"
elementos[3] = "Alterado"
console.log(elementos)

/*24.Crie um objeto com seu nome e uma data (new Date()). Use .getDay() para
exibir o dia da semana que está na data do objeto.*/
var dados = {
    nome:  "Lucas",
    data: new Date()
}
console.log(dados.data.getDay())

/*25.Crie um array com pelo menos 3 valores diferentes e exiba apenas o
elemento que está no meio do array (sem usar .pop() ou .push()).*/
var lista = [1,2,3]
console.log(lista[1])