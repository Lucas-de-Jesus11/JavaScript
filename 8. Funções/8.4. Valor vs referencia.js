// Valor: 
function mult(n){
    n *= n
    return n
}
let numVal = 10
console.log(mult(numVal));
console.log(numVal) //10 -> o valor continua sendo o mesmo
// Variaveis que não são objeto, são passadas como valores 

//Referencia:
function multObj(obj){
    obj.value *= obj.value;
    return obj
}
const numObject = {value: 10}
console.log(multObj(numObject))
console.log(numObject) // O valor não continua sendo o mesmo porque ele é um object
// Para variaveis do tipo object, elas são passadas como referencia, passam como objeto