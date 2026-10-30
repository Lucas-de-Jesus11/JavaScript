// Ja vimos como atribuir uma função:
function mult(n) {
  n *= n;
  return n;
}
console.log(mult(10));

// Tbm vimos que é possivel atribuir uma função a uma constante:
const mult = function (n) {
  n *= n;
  return n;
};
console.log(mult(10));

// É possível fazer o mesmo, utilizando arrow:
const mult = (n) => (n *= n);
console.log(mult(10));

// Se for usar {} é necessário colocar "return":
const mult = (n) => {
  return (n *= n);
};
console.log(mult(10));