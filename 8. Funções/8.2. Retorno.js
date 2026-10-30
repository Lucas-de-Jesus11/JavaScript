function soma(n1, n2){
    console.log(n1 + n2)
}
soma(10, 10)

//Outra maneira de fazer
function soma(n1, n2){
    const result = n1 + n2;
    return result;
}
const result = soma(10, 10);
console.log(result);

//Simplificando mais
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(10, 20))