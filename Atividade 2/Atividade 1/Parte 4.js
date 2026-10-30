/*14.Crie um array com 3 objetos, cada um representando um produto com nome
e preco.
Exiba no console o nome do último produto do array.
Altere o preço do primeiro produto.
*/
const produtos = [
    {nome:"Mouse", preco: 500},
    {nome: "Teclado", preco: 700},
    {nome: "Monitor", preco: 1300}
]
console.log(produtos[2].nome)
produtos[0].preco = 250
console.log(produtos)

/*15.Crie um array com 2 objetos, cada um com nome e idade.
Exiba no console apenas a idade do segundo objeto.
Adicione um terceiro objeto ao array.*/
const person = [
    {nome: "Lucas", idade: 20},
    {nome: "Fulano", idade: 30},
]
console.log(person[1].idade)
person.push({nome:" Ciclano", idade: 30})
console.log(person)