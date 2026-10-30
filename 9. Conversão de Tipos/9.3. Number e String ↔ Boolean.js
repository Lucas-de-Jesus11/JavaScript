// "" <-> false
// " " <-> true
// 0 <-> false
// 1 <-> true

console.log(Boolean(""))
console.log(Boolean("123"))
console.log(Boolean(0))
console.log(Boolean(1))

console.log(Number(true))// 1
console.log(Number(false))// 0

console.log(String(false))
console.log(typeof String(false))
console.log(String(true))
console.log(typeof String(true))