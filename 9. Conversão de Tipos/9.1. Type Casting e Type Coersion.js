// Type Coersion = conversão "coercitiva" pela VM 
// Type Casting = conversão pelo usuario

console.log("2" + 2)
console.log(typeof("2" + 2)) // Conversão feita pela máquina

console.log(Number("2" + 2))
console.log( typeof Number("2" + 2))// Type casting

console.log("2" + 2 + 2)
console.log(Number("2" + 2 )+ 2)