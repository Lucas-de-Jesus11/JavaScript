// "30/04/2025" < - > Date

console.log(new Date())
// Convertendo String para Date 
console.log(new Date("30/04/2025")) //Não funciona , pois o date só funciona no formato ISO

console.log(new Date("04/30/2022"))// Certo
console.log(new Date("2025-04-2030"))// Certo

// Convertendo Date para String 
console.log(new Date().toString())
console.log(typeof new Date())
console.log(typeof new Date().toString())

console.log(typeof new Date().toISOString())

