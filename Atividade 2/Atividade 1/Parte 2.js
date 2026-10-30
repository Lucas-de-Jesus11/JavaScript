/*6. Crie um array com pelo menos 6 nomes de cidades.
o Exiba no console a quantidade total de elementos.
o Exiba no console o primeiro e o último elemento.*/
const cidades = ["Guarulhos", 
                "Campinas" ,
                "São Bernardo do Campo",
                "Santo André", 
                "Jundiai", 
                "Arujá"]
console.log(cidades.length) // Quantidade de elementos
console.log(cidades[0]) //Primeiro elemento elemento
console.log(cidades[cidades.length - 1]) //Ultimo elemento

// 7. Crie um array de 4 cores e altere a segunda cor para "Preto".
let cores = ["Vermelho", "Azul", "Cinza", "Rosa"]
cores[1] = "Preto"
console.log(cores)

/*8. Crie um array com 5 valores e remova o último elemento usando .pop().
Depois, adicione um novo valor ao final usando .push().*/
let valores = [10, 20, 30, 40, 50]
valores.pop()//Removendo o ultimo elemento
valores.push(60) //Adicionando um novo valor no final
console.log(valores)

/*9. Crie um array de frutas e altere o valor da última fruta para "Abacaxi" sem
usar .pop().*/
let frutas = ["Maça", "Banana", "Uva"]
frutas[2] = "Abacaxi"
console.log(frutas)

/*10.Crie um array com 3 valores diferentes e substitua todos os valores do array
por "OK".*/
let Valores = [1, 2, 3]
Valores.fill("OK")
console.log(Valores)