/*10. Uma pizzaria cobra R$ 40 a pizza.
• Se o cliente escolher borda recheada, acrescente R$ 8.
• Se pedir refrigerante, acrescente R$ 10.
• Mostre o valor final do pedido.*/ 

let pizza = 40
let borda_recheada = 8
let refrigerante = 10

console.log(borda_recheada ? pizza+borda_recheada : 'Sem borda')
console.log(refrigerante ? pizza+refrigerante : 'Sem refrigerante')
console.log(refrigerante && borda_recheada ? pizza+refrigerante+borda_recheada : 'Sem refrigerante e borda recheada')
