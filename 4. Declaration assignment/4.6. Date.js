// const datNasc = new Date() Data e horario atual
// const datNasc = new Date(2000, 6, 18, 22, 17, 33)
// const datNasc = new Date("Jul 18 2000 15:45:22")//Formato de string

const datNasc = new Date("2000-07-18T18:45:57.000Z")//Formato ISO 8601 Time-Zone
console.log(datNasc)
console.log(typeof datNasc)
console.log(datNasc.toISOString())

console.log("Dia:", datNasc.getDate())
console.log("Mês:", datNasc.getMonth() + 1)//Precisa soma pq retornar de 0 a 11
console.log("Ano:", datNasc.getFullYear())

//Calcular a idade
// let today = new Date()
// console.log(today)

console.log(new Date().getFullYear() - datNasc.getFullYear())


let data = new Date()
// (0 = domingo, 6 = sabado)
console.log("Dia da semana: ", data.getDay())
console.log("Dia do mes: ", data.getDate())  

// Definir o dia do mes para 15
data.setDate(15)
console.log("Dia do mês:", data)