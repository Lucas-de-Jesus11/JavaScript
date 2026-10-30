let set = [9, 70, 3, 4.76];

let [n1, n2] = set;

console.log(n1);
console.log(n2);

// Exemplo de onde usar:
function list(){
    const x = 10
    const y = 400
    return [x, y]
}
const [x, y] = list()
console.log(x)
console.log(y)