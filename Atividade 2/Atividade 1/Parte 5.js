// 16.Crie uma variável com a data atual e exiba no console.
const datAtual = new Date() //Data e horario atual
console.log(datAtual)

/*17.Use .getDay() para mostrar no console o número que representa o dia da
semana de hoje.*/
console.log(datAtual.getDay())

// 18.Use .setDate() para alterar o dia da data para 10 e exiba o novo valor.
datAtual.setDate(10)
console.log(datAtual)

// 19.Crie uma variável que armazene o ano atual usando new Date().
const anoAtual = new Date().getFullYear()
console.log(anoAtual)