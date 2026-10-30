// Quando que uma função esta disponivel para ser usado dentro do codigo?

// Assim ja vimos que funciona:
const mult = function(n){
    n *= n
    return n
}
console.log(mult(10))

// Mas e se o "console.log" viesse antes da "function"?
console.log(value(10));
const value = function (n) {
  n *= n;
  return n;
};